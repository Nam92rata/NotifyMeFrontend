import React from 'react';


class ApprovedPage extends React.Component {
  render() {
    if(this.props.data){
    return (
        <div>
            <section>
                <h2>Welcome Approved Page</h2>
                
                  {this.props.data.forms.forms.map(el=>{
                    if(el.approverDepartment===localStorage.getItem('department') && el.status==="approved"){
                    return <div key={el._id}>{el.creator} posted a  form {el.status} by {el.approver}</div>
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

export default ApprovedPage;