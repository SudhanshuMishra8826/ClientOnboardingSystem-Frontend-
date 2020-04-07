import React, { Component } from "react";
import Designerform from './Designerform';
import Makerform from './Makerform';
import Bothform from './Bothform';


export class Userdetails extends Component {
	render() {
		const { values, handleChange, nextStep } = this.props;
        switch(values.tou){
            case "1":
                return(
                        <Designerform
                        nextStep={nextStep}
                        handleChange={handleChange}
                        values={values}
                        />
                )
            case "2":
                return(
                        <Makerform
                        nextStep={nextStep}
                        handleChange={handleChange}
                        values={values}
                        />
                )
            case "3":
                return(
                    <Bothform
                    nextStep={nextStep}
                    handleChange={handleChange}
                    values={values}
                    />
            )
                    
        }
	}
}

export default Userdetails;
