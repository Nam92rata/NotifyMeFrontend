import React from 'react';


class PendingPage extends React.Component {
  render() {
    if(this.props.data){
    return (
        <div>
            <section>
                <h2>Welcome Pending Page</h2>
                
                  {this.props.data.forms.forms.map(el=>{
                    return <div>{el.status}</div>
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