import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

class PendingPage extends React.Component {
  render() {
    if(this.props.data){
    return (
        <div>
            <section>
                <h2>Welcome Pending Page</h2>
                
                  {this.props.data.forms.forms.map(el=>{
                    if(el.approverDepartment===localStorage.getItem('department') && el.status==="Pending"){
                    return (
                      <Paper style={{padding: 10,width:"500px", height: "25px", borderRadius:"25px"}} >                      
                      <Typography >
                        <div key={el._id}>{el.creator} posted a  form {el.status} with {el.approver}</div>
                      </Typography>
                    </Paper>
                        )
                    }
                  })}  
            </section>
        </div>
    );}
    else{
      return (
        <div>
            <section>
                <h2>Welcome Pending Page</h2>                   
                
            </section>
        </div>
    )
    }
  }
}

export default PendingPage;