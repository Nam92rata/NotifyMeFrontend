import React from 'react';
import Paper from '@material-ui/core/Paper';

class RejectedPage extends React.Component {
  render() {
    if(this.props.data){
      var newArr=[];
      let reversedArray = [...this.props.data.forms.forms].reverse();
      reversedArray.map(el=>{                    
        if(el.approverDepartment===localStorage.getItem('department') && el.status==="Rejected"){
          newArr.push(el)
      }})   
      newArr=newArr.slice(0,5);
    return (
        <div>
            <section>
                <h2>Rejected Requests</h2>                
                  {newArr.map(el=>{
                    return (
                      <div key={el._id}>
                        <Paper key={el._id} style={{marginLeft:'20%', padding: 20,width:"500px", 
                                     backgroundColor:'darksalmon', height: "auto", borderRadius:"25px"}}> 
                        You {el.status.toLowerCase()} the form of {el.creator}.
                        <br/>
                        <div>Message: <span style={{color:'darkblue'}}><b><i>{el.case}</i></b></span></div>
                        </Paper>
                        <br/>
                      </div>
                        )
                  })}  
            </section>
        </div>
    );}
    else{
      return (
        <div>
            <section>
                <h2>No Rejected Requests</h2>  
            </section>
        </div>
    )
    }
  }
}

export default RejectedPage;