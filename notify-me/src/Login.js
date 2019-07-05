import React, {Component} from 'react';
import SignupPage from './SignupPage'
import { Card,CardContent, Typography,Fab, FormControl, TextField, InputAdornment, IconButton, CardActions } from '@material-ui/core';
import { Visibility, VisibilityOff,  AccountCircle } from '@material-ui/icons';
import axios from 'axios';
// var errmsg = "";
var userActive="";
class LoginPage extends Component {
    constructor(props){
        super(props)
        this.state={
          signup: false,
          username:'',
          password:''
        }
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    onChange=(evt)=>{
        this.setState({
            [evt.target.name]:evt.target.value 
        })
    }

    handleSubmit= (evt)=>{
        evt.preventDefault();
        const username= this.state.username;
        const password= this.state.password;        
        this.validateUser(username,password);
        
        
    }

    handleClickShowPassword = () =>{
        this.setState(state=>({showPassword : !state.showPassword}));
    }

    validateUser = (username,password) => {
        console.log(username,password)
        const user = {
            username: username,
            password:password
          };
      
          axios.post(`http://localhost:4000/signIn`,  user )
            .then(res => {
              console.log(res);
              console.log(res.data);
              localStorage.setItem("username",res.data.token.user);
              localStorage.setItem("department",res.data.token.department);
              console.log("Validating",localStorage.getItem('username'));
              this.props.changeLoginStateHandler();
            })
            .catch(error=>{
                console.log(error)
            }
                
            )
    }
    
    handleSignup = () =>{
        this.setState({signup:true})
    }
    changeStateHandler =()=>{
        this.setState({signup:false})
    }
    render() {  
        const {error, token}= this.props;
        if(!this.state.signup){        
            return( 
                <div>
                    <form onSubmit={(evt)=>this.handleSubmit(evt)}>
                    <div>
                       <Card className="LoginPage">
                           <CardContent>
                               <Typography gutterBottom component="span" align="center">
                                   Notify Me
                               </Typography>
                               
                               <div>
                                   {error && <div style={{color:'red',textAlign:'center'}}>{error}</div>}
                                   <FormControl>
                                       <div>
                                            <TextField
                                                id="input-with-icon-adornment" type="text"
                                                name="username"
                                                label="Username"
                                                fullWidth
                                                margin="normal"
                                                style={{margin:20}}
                                                variant="filled"
                                                onChange={e=>{this.onChange(e)}}
                                                InputProps={{
                                                    endAdornment:(
                                                        <InputAdornment  position="start">
                                                            <AccountCircle/>
                                                        </InputAdornment>
                                                    )
                                                }}
                                            />
                                        </div>
                                        <div>
                                            <TextField
                                                id="filled-adornment-password" 
                                                name="password"
                                                label="Password"
                                                fullWidth
                                                margin="normal"
                                                style={{margin:20}}
                                                type={this.state.showPassword ? 'text':'password'}
                                                variant="filled"
                                                onChange={e=>{this.onChange(e)}}
                                                InputProps={{
                                                    endAdornment:(
                                                        <InputAdornment  position="end">
                                                            <IconButton
                                                                aria-label="Toggle password visibility"
                                                                onClick={this.handleClickShowPassword}
                                                                    >
                                                                {this.state.showPassword ? <VisibilityOff/> : <Visibility/>}
                                                            </IconButton>
                                                        </InputAdornment>
                                                    )
                                                }}
                                            />
                                        </div>
                                        <br/>
                                   </FormControl>
                               </div>
                               <CardActions>
                                    <Fab
                                        variant="extended"                                        
                                        color="primary"                                        
                                        type="submit"
                                        style={{margin:20}}
                                        
                                        onClick={this.handleSubmit}
                                    >
                                        Login
                                    </Fab>
                                    <Fab variant="extended" color="primary" aria-label="Add"
                                        onClick = {this.handleSignup} >
                                        SignUp
                                    </Fab>
                                   {/* <Button label="Login"
                                        fullWidth
                                        margin="normal"
                                        style={{margin:20}}
                                        buttonStyle={{borderRadius: 25}}
                                        labelColor={'#FFFFFF'}
                                        backgroundColor={'#0066e8'}
                                        style={{borderRadius:25}}
                                        type="submit"
                                        onClick={this.submit}
                                    /> */}
                               </CardActions>
                           </CardContent>
                       </Card>
                    </div>

                    </form>
                </div>                     
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