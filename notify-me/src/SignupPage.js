import React from 'react';
import { Card,CardContent, Typography,Fab, FormControl, TextField, InputAdornment, IconButton, CardActions } from '@material-ui/core';
import { Visibility, VisibilityOff,  AccountCircle } from '@material-ui/icons';
import axios from 'axios';

class SignupPage extends React.Component { 
   
    constructor(props){
        super(props)
        this.state={          
          newUser:{
            username:'',
            password:'',
            department:'D1'
        },
        deptOptions: ['D1', 'D2', 'D3']
        }
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    onChange=(evt)=>{
        console.log(evt.target.name,evt.target.value)
        let value = evt.target.value;
        let name = evt.target.name; 
        this.setState( prevState => {
            return { 
               newUser : {
                        ...prevState.newUser, [name]: value
                       }
            }
         }, () => console.log(this.state.newUser)
         )       
        // this.setState({
        //     newUser:{
        //         [evt.target.name]:evt.target.value
        //     } 
        // })
    }

    handleSubmit= (evt)=>{
        evt.preventDefault();
        const username= this.state.newUser.username;
        const password= this.state.newUser.password;
        const dept= this.state.newUser.department;
        this.props.changeStateHandler();
        const user = {
            username: username,
            password:password,
            department:dept
          };
        // this.props.dispatch(authorize(username,password));
        console.log(username,password,dept)
        axios.post(`http://localhost:4000/signUp`,  user )
        .then(res => {
          console.log(res);
          console.log(res.data);
          
        })
        .catch(error=>{
            console.log(error)
        }
            
        )
        // this.validateUser(username,password);
    }

    handleClickShowPassword = () =>{
        this.setState(state=>({showPassword : !state.showPassword}));
    }
    changeStateHandler =()=>{
        this.setState({signup:false})
    }
    render() {        
        return (  
            <div>        
            <section>     
            <div>
                <form onSubmit={(evt)=>this.handleSubmit(evt)}>
                <div>
                    <Card className="LoginPage">
                    <CardContent>
                        <Typography gutterBottom component="span" align="center">
                            Signup Here
                        </Typography>
                        
                        <div>
                            {/* {error && <div style={{color:'red',textAlign:'center'}}>{error}</div>} */}
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
                                
                                <div className="form-group">
                                    <label > Department </label>
                                    <select
                                    name="department"     
                                    value={this.state.newUser.department}                                       
                                    onChange={e=>{this.onChange(e)}}
                                    >
                                    <option  disabled>--select--</option>
                                    {this.state.deptOptions.map(option => {
                                        return (
                                        <option
                                            key={option}
                                            value={option}
                                            label={option}>{option}
                                        </option>
                                        );
                                    })}
                                    </select>
                                </div>
                                
                                <br/>
                            </FormControl>
                        </div>
                        <CardActions>                                                                       
                            <Fab variant="extended" color="primary" aria-label="Add"
                                onClick = {this.handleSubmit} >
                                SignUp
                            </Fab>                                 
                        </CardActions>
                    </CardContent>
                    </Card>
                </div>
                </form>
            </div> 
            </section>
            </div>
    );
  }
}


export default SignupPage;