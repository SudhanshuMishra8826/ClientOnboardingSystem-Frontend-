import React, { Component } from "react";
import '../style/main.css';
export class Usertype extends Component {
	render() {
		const { values, handleChange, nextStep } = this.props;
		return (
			<div>
				<h1 className="title">Get Onboard</h1>
				<h4 className="title">Seamless Onboarding experience....</h4>
				<form className="card" onSubmit={nextStep}>
					<label>
						<p><h2>What do you want to register as ?</h2></p>
						<select onChange={handleChange('tou')}>
							<option value="1">Designer</option>
							<option value="2">Maker</option>
							<option value="3">Both</option>
						</select>
					</label>
					<br></br>
					<input type="submit" value="Submit" />
				</form>
			</div>
		);
	}
}

export default Usertype;
