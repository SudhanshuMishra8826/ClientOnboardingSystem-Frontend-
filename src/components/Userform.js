import React, { Component } from 'react'
import Usertype from './Usertype';
import Userdetails from './Userdetails';
import Confirm from './Confirm';


export class Userform extends Component {
  state={
    step:1,
    tou:"1",
    email:'',
    password:'',
    capd:'',
    capm:'',
    mat:'',
    loc:'',
    tod:'',
    train:''
}
nextStep=()=>{
    const{ step}=this.state;
    this.setState({
        step: step+ 1
    });
}
prevStep=()=>{
    const{ step}=this.state;
    this.setState({
        step: step- 1
    });
}
handleChange= input => e =>{
    this.setState({
        [input]:e.target.value
    });
}

render() {
    const {step, tou, email, password, capd, capm, mat, loc, tod, train}= this.state;
    const values={tou, email, password, capd, capm, mat, loc, tod, train};
    switch(step){
        case 1:
            return(
              <Usertype 
              nextStep={this.nextStep}
              handleChange={this.handleChange}
              values={values}
              />
            )
        case 2:
            return(
              <Userdetails 
              nextStep={this.nextStep}
              handleChange={this.handleChange}
              values={values}
              />
            )
        case 3:
            return(
              <Confirm 
              nextStep={this.nextStep}
              handleChange={this.handleChange}
              values={values}
              />
            )
    }
}
}

export default Userform
