import React from 'react';


class SignupPage extends React.Component { 
   
    render() {
    return (
      <div>        
          <section>              
            <form >
                    <div className="form-group">
                        <input type="text" ref={input => this.name = input} className="form-control" placeholder="Username" />
                    </div>
                    <div className="form-group">
                        <input type="text" ref={input => this.pwd = input} className="form-control" placeholder="Password"/>
                    </div>      
                    <div className="form-group">
                        <select name="Department">
                            <option value="">--select--</option>
                            <option value="D1">Department 1</option>
                            <option value="D2">Department 2</option>
                            <option value="D3">Department 3</option>                            
                        </select>
                        {/* <input type="text" ref={input => this.pwd = input} className="form-control" placeholder="Department"/> */}
                    </div>                  
                    <div className="form-group">                
                        <button className="btn btn-primary btn-block" type="button"  onClick = {this.props.changeStateHandler}>Signup</button>                    
                    </div>
                </form>         
          </section>
      </div>
    );
  }
}


export default SignupPage;