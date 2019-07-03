import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch,Link, NavLink, Redirect, Prompt} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import FormPage from './FormPage';
import PendingPage from './PendingPage';
import ApprovedPage from './ApprovedPage';
import RequestPage from './RequestPage';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
const styles = theme => ({
    root: {
      width: '100%',
    },
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing.unit * 2,
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing.unit * 3,
        width: 'auto',
      },
    },
    searchIcon: {
      width: theme.spacing.unit * 9,
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
      width: '100%',
    },
    inputInput: {
      paddingTop: theme.spacing.unit,
      paddingRight: theme.spacing.unit,
      paddingBottom: theme.spacing.unit,
      paddingLeft: theme.spacing.unit * 10,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: 200,
      },
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
  });
class Home extends Component {
    state = {
        anchorEl: null,
        mobileMoreAnchorEl: null,
      };
    
      handleProfileMenuOpen = event => {
        this.setState({ anchorEl: event.currentTarget });
      };
    
      handleMenuClose = () => {
        this.setState({ anchorEl: null });
        this.handleMobileMenuClose();
      };
    
      handleMobileMenuOpen = event => {
        this.setState({ mobileMoreAnchorEl: event.currentTarget });
      };
    
      handleMobileMenuClose = () => {
        this.setState({ mobileMoreAnchorEl: null });
      };
    
    handleLogout = () => {
    //    this.props.logoutUser() 
    //    this.props.auth("")
    }
    render() {
        const { anchorEl, mobileMoreAnchorEl } = this.state;
    const { classes } = this.props;
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    

    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMobileMenuOpen}
        onClose={this.handleMenuClose}
      >
        
        <MenuItem onClick={this.handleMobileMenuClose}>
          <IconButton color="inherit">
            <Badge badgeContent={11} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <p>Notifications</p>
        </MenuItem>
        <MenuItem onClick={this.handleProfileMenuOpen}>
            <Button color="inherit">Logout</Button>          
        </MenuItem>
      </Menu>
    );
        return(
            <Router>
                <div className={classes.root}>               
                <AppBar position="static">
                    <Toolbar>
                        <Tabs variant="contained" >
                            <Tab label="Form" component={Link} to="/form" />
                            <Tab label="Pending" component={Link} to="/pending"/>
                            <Tab label="Approved" component={Link} to="/approved" />
                            <Tab label="Request" component={Link} to="/request" />
                        </Tabs>
                
                        <div className={classes.grow} />
                        <div className={classes.sectionDesktop}>              
                        <IconButton color="inherit">
                            <Badge badgeContent={17} color="secondary">
                            <NotificationsIcon />
                            </Badge>
                        </IconButton>
                        <Button color="inherit">Logout</Button>
                        </div>
                        <div className={classes.sectionMobile}>
                        <IconButton aria-haspopup="true" onClick={this.handleMobileMenuOpen} color="inherit">
                            <MoreIcon />
                        </IconButton>
                        </div>
                </Toolbar>
                </AppBar>
                {renderMobileMenu}
                <Switch>                    
                    <Route path="/pending" component = {PendingPage}/>
                    <Route path="/approved"  component = {ApprovedPage}/>
                    <Route path="/request" component = {RequestPage}/>
                    <Route path="/form" component = {FormPage}/>
                </Switch>
                </div>
            </Router>

        
        )
    }
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles)(Home);
