import React, { Component } from 'react';
import LoginPage from './Login';
import Home from './Home';


class App extends Component {  
  constructor(props){
    super(props)
    this.state={
      loggedin: false
    }
  }
  render() {
    if (this.state.loggedin){
      return(
        <div className="App">        
        <div className="row"> 
            <div className="col-md-10">              
              <Home />
            </div>            
        </div>
                
        </div>
        
      )
    }
    else{
      return(
        <div className="App">        
          <div className="row">
            <div className="col-md-6 col-md-offset-2">
              <LoginPage />
            </div>
          
          </div>
        </div>
        
      )
    }
    
    
  }
}

export default App;
