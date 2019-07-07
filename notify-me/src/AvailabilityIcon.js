import React from 'react';


const AvailabilityIcon=(props)=>{
    if(props.data){
        return (
            <i className="material-icons" style={{fontSize:'50px', marginTop:'100%'}}>
                check
            </i>
        )}
        else{
            return(
                <div></div>
            )
        }
   
}


export default AvailabilityIcon;