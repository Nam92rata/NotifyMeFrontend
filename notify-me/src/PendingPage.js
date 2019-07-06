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
                  {
                    this.props.data.forms.forms.map(el=>{                    
                    if(el.approverDepartment===localStorage.getItem('department') && el.status==="Pending"){
                    return (
                      <Paper key={el._id} style={{padding: 10,width:"500px", height: "25px", borderRadius:"25px"}} >                      
                      <Typography >
                        {el.creator} has posted a  form which is {el.status.toLowerCase()} with {el.approver}.
                      </Typography>
                    </Paper>
                        )
                    }
                    else{
                      return(
                        <div key={el._id}></div>
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