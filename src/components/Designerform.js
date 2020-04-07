import React, { Component } from "react";
import '../style/main.css';

export class Designerform extends Component {
	render() {
		const { values, handleChange, nextStep } = this.props;

		return (
			<div>
				<h1 className="title">Get Onboard</h1>
				<form className="card" onSubmit={nextStep}>
					<label>
						<h3>Email:</h3>
						<input
							type="email"
							name="email"
							onChange={handleChange("email")}
							defaultValue={values.email}
						/>
					</label>
					<br></br>
					<label>
						<h3>Password:</h3>
						<input
							type="text"
							name="pass"
							onChange={handleChange("password")}
							defaultValue={values.password}
						/>
					</label>
					<label>
                    <h3>Q. How much time can you spend on Naya projects per week?</h3>						    <input
							type="text"
							name="cap"
							onChange={handleChange("capd")}
							defaultValue={values.capd}
						/>
					</label>
					<label>
                    <h3>Q. Which of the following best describes you?</h3>
                        <select onChange={handleChange("tod")}>
							<option value="Furniture Designer">Furniture Designer</option>
							<option value="Architect">Architect</option>
							<option value="Interior Designer">Interior Designer</option>
							<option value="Industrial Designer">Industrial Designer</option>
							<option value="Designer Maker">Designer Maker</option>
							<option value="Other">Other</option>
						</select>
					</label>
					<label>
                    <h3>Q. Education level/type </h3>			
            			<input
							type="text"
							name="train"
							onChange={handleChange("train")}
							defaultValue={values.train}
						/>
					</label>
					<input type="submit" value="Submit" />
				</form>
			</div>
		);
	}
}

export default Designerform;
