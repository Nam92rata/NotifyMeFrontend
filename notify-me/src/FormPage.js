import React from 'react';
import { Card,CardContent, Typography,Fab, FormControl, TextField, InputAdornment, IconButton, CardActions } from '@material-ui/core';
import axios from 'axios';


class FormPage extends React.Component {
  constructor(props){
    super(props)
    this.state={          
      newForm:{        
        approver:'',
        department:'',
        message:''
    },
    deptOptions: ['D1', 'D2', 'D3'],
    users:[]
    }
    this.handleSubmit=this.handleSubmit.bind(this);
}

onChange=(evt)=>{
  console.log("Here")
    let value = evt.target.value;
    let name = evt.target.name; 
    this.setState( prevState => {
        return { 
           newForm : {
                    ...prevState.newForm, [name]: value
                   }
        }
     }, () => console.log("On change", this.state.newForm)
     )
              
}

onChangeSelect = (evt)=>{
  let value = evt.target.value;
  let name = evt.target.name;
  this.setState( prevState => {
    return { 
       newForm : {
                ...prevState.newForm, [name]: value
               }
    }
 }, () => console.log("On change", this.state.newForm)
 )
   
  axios.get(`http://localhost:4000/users/${value}`)
     .then(res => {
      //  console.log(res);
       console.log("Form ",res.data);
       this.setState({users: res.data.usersList.users});
    //    this.setState( prevState => {
    //     return { 
    //        users : res.data.usersList.users
                   
    //     }
    //  }, () => console.log(this.state.users)
    //  )
       })
     .catch(error=>{
         console.log(error)
     })
}

handleSubmit= (evt)=>{
    evt.preventDefault();
    const creator=localStorage.getItem('username');
    const creatordept=localStorage.getItem('department');
    const approver= this.state.newForm.approver;    
    const dept= this.state.newForm.department;   
    const message= this.state.newForm.message; 
    let status = "Pending"
    const form = {
        creator:creator,
        creatorDepartment:creatordept,
        approver: approver,        
        approverDepartment:dept,
        case:message,
        status:status
      };   
    // console.log(creator, creatorDepartment ,approver, approverDepartment, case, status)
    axios.post(`http://localhost:4000/forms`,  form )
    .then(res => {
      // console.log(res);
      console.log(res.data);
      
    })
    .catch(error=>{
        console.log(error)
    }        
    )
    
}

// changeStateHandler =()=>{
//     this.setState({signup:false})
// }
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
                        Create a form
                    </Typography>
                    
                    <div>
                        {/* {error && <div style={{color:'red',textAlign:'center'}}>{error}</div>} */}
                        <FormControl>
                            <div className="form-group">
                                    <label > Department </label>
                                    <select
                                    name="department"     
                                    value={this.state.newForm.department}                                       
                                    onChange={e=>{this.onChangeSelect(e)}}
                                    >
                                    <option >--select--</option>
                                    {this.state.deptOptions.map(option => {
                                        if(option!=localStorage.getItem('department')){
                                        return (
                                        <option
                                            key={option}
                                            value={option}
                                            label={option}>{option}
                                        </option>
                                        );}
                                    })}
                                    </select>
                                </div>

                              
                                <div className="form-group">
                                  <label > Approver </label>
                                  <select
                                  name="approver"     
                                  value={this.state.newForm.approver}                                       
                                  onChange={e=>{this.onChange(e)}}
                                  >
                                  <option  >--select--</option>
                                  {this.state.users.map(option => {
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

                            <div>
                                <TextField
                                    id="input-message" type="text"
                                    name="message"
                                    label="Message"                                    
                                    fullWidth
                                    margin="normal"
                                    style={{margin:20}}
                                    variant="filled"
                                    onChange={e=>{this.onChange(e)}}                                             
                                />
                            </div> 
                            <br/>
                        </FormControl>
                    </div>
                    <CardActions>                                                                       
                        <Fab variant="extended" color="primary" aria-label="Add"
                            onClick = {this.handleSubmit} >
                            Send Form
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

export default FormPage;