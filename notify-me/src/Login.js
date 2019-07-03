import React, {Component} from 'react';
import { BrowserRouter as Router, Link, NavLink, Redirect, Prompt} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import SignupPage from './SignupPage'

// var errmsg = "";
var userActive="";
class LoginPage extends Component {
    constructor(props){
        super(props)
        this.state={
          signup: false
        }
      }
    validateUser = () => {
        let flag = false;
        // this.props.users.map((user) => {            
        //     if (user.first === this.name.value){
        //         flag = true;
        //         userActive=user;                            
        //     }            
        // })
        return flag;
    }
    handleSubmit = () =>{  
        
        // if(this.validateUser()){
        //     this.props.loginUser();            
        //     this.props.activeUser( userActive);            
        //     return;
        // }
        // else{            
        //     errmsg = "Login failed !!";
        //     this.props.auth(errmsg);
        //     return;
        // }   
       
    }
    handleSignup = () =>{
        this.setState({signup:true})
    }
    changeStateHandler =()=>{
        this.setState({signup:false})
    }
    render() {  
        if(!this.state.signup){        
            return( 
                <Router>          
                <div > 
                    <div className="row">
                        <div className="col-md-10 col-md-offset-1 custom">
                        </div>
                    </div>              
                    <section>  
                    <div className="row">      
                    <div className="col-md-10 col-md-offset-1" >           
                        <h2>Switch-on</h2>
                        {/* { this.props.user.authError && <div className="alert alert-danger">{this.props.user.authError}</div> } */}
                        <form >
                            <div className="form-group">
                                <input type="text" ref={input => this.name = input} className="form-control" placeholder="Username" />
                            </div>
                            <div className="form-group">
                                <input type="text" ref={input => this.pwd = input} className="form-control" placeholder="Password"/>
                            </div>                        
                            <div className="form-group">
                            <Link to="/">
                                <button className="btn btn-primary btn-block" type="button"  onClick = {this.handleLogin}>Login</button>
                            </Link>
                            <Link to="/signup">                          
                                <button className="btn btn-primary btn-block" type="button"  onClick = {this.handleSignup}>Signup</button>
                            </Link>
                            </div>
                        </form>                          
                        </div>   
                        </div>             
                    </section>                                       
                </div> 
                </Router>                     
            )
        }
        else{
            return(
                <SignupPage changeStateHandler={this.changeStateHandler}/>
            )
        }
   
}
}


export default LoginPage;