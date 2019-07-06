import React from 'react';
import Paper from '@material-ui/core/Paper';
import Modal from '@material-ui/core/Modal'
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { pink } from '@material-ui/core/colors';
class NotificationModal extends React.Component {
    state={
        open:false
    }
    handleClose=() =>{
        this.setState({open: false});
    }
    showNotifications = (evt) =>{
        console.log("Click")
        this.setState({open:true})    
    }

    render() {
    if(this.props.data){
    return (
        <div>
            <Badge badgeContent={this.props.data.forms.forms.length} color="secondary">
                <NotificationsIcon onClick={this.showNotifications} />
            </Badge>
            <Modal open={this.state.open} onClose={this.handleClose} style={{paddingTop:40,paddingLeft:300,paddingRight:200}}>
                <List>
                    {this.props.data.forms.forms.map(el=>{
                    if((el.approver===localStorage.getItem('username') && el.status==="Pending")){
                        return (
                        <Paper key={el._id} style={{position: 'relative', width: 400,
                                        backgroundColor: pink,                                       
                                        padding: 10,
                                        outline: 'none'}} >                      
                        <ListItem >
                            <ListItemAvatar>
                            <Avatar>                                        
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText>
                            <div >{el.creator} has requested a form {el.status.toLowerCase()} for your ({el.approver}) approval.</div>
                            </ListItemText>
                        </ListItem>
                        </Paper>
                            )
                    }
                    else if((el.creator===localStorage.getItem('username') && (el.status==="Approved" || el.status==="Rejected"))){
                        return (
                            <Paper key={el._id} style={{position: 'relative', width: 400,
                                            backgroundColor: pink,                                       
                                            padding: 10,
                                            outline: 'none'}} >                      
                            <ListItem >
                                <ListItemAvatar>
                                <Avatar>                                        
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText>
                                <div >{el.approver} has {el.status.toLowerCase()} your ({el.creator}) request </div>
                                </ListItemText>
                            </ListItem>
                            </Paper>
                                )
                    }
                    else{
                        return(
                            <div key={el._id}></div>
                        )
                    }
                    }
                    )}   
                </List>
            </Modal>
        </div>
    );}
    else{
      return (
        <div> 
            <Badge badgeContent={17} color="secondary">
                <NotificationsIcon onClick={this.showNotifications} />
            </Badge>           
        </div>
        )
    }
  }
}

export default NotificationModal;