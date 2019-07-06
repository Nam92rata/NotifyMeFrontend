import React from 'react';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import FolderIcon from '@material-ui/icons/Folder';
import Button from '@material-ui/core/Button';
import axios from 'axios';

class RequestPage extends React.Component {
  handleApprove = (id) =>{
    console.log("To approve form id : ", id) 
    const form =
        [{propName:'status',
        value:'Approved'} ]
    
    axios.patch(`http://localhost:4000/forms/${id}`, form)
    .then(res => console.log(res.data))
    .catch(error=>{
      console.log(error);
    });
    }

  handleReject = (id) =>{
    console.log("To reject form id : ", id)
    const form =[{      
      propName:'status',
      value:'Rejected'      
  }]
  console.log(form);
    axios.patch(`http://localhost:4000/forms/${id}`, form)
    .then(res => console.log(res.data))
    .catch(error=>{
      console.log(error);
    })
    }
  
  render() {
    if(this.props.data){
    return (
        <div>
            <section>
                <h2>Welcome Request Page</h2>                
                  <List >
                  {this.props.data.forms.forms.map(el=>{
                      if(el.approver===localStorage.getItem('username') && el.status==="Pending"){
                      return (
                        <Paper style={{padding: 10,width:"auto", height: "auto", borderRadius:"25px"}} >  
                              <ListItem>
                                <ListItemAvatar>
                                  <Avatar>
                                    <FolderIcon />
                                  </Avatar>
                                </ListItemAvatar>
                                <ListItemText>
                                  <Typography >
                                    <div key={el._id}>{el.creator} has requested a  form {el.status.toLowerCase()} with you.
                                    <br/>
                                      {el.case}
                                    </div>
                                  </Typography>
                                </ListItemText>
                                <ListItemSecondaryAction>                                  
                                    <Button variant="contained" color="primary" onClick={this.handleApprove.bind(this,el._id)} >
                                      Approve                                      
                                    </Button> 
                                    <Button variant="contained" color="secondary" onClick={this.handleReject.bind(this,el._id)} >
                                      Reject                                      
                                    </Button>
                                </ListItemSecondaryAction>
                              </ListItem> 
                      </Paper>
                          )
                      }
                      else{
                        return(
                          <div key={el._id}></div>
                        )
                      }
                    })}
                  </List>
            </section>
        </div>
    );}
    else{
      return (
        <div>
            <section>
                <h2>Welcome Request Page</h2>                   
                
            </section>
        </div>
    )
    }
  }
  
}

export default RequestPage;