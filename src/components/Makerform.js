import React, { Component } from 'react'
import '../style/main.css';

export class Makerform extends Component {
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
					<label>
						<h3>Password:</h3>
						<input
							type="text"
							name="email"
							onChange={handleChange("password")}
							defaultValue={values.password}
						/>
					</label>
					<label>
						<h3>Q. How many projects on average do you work on every month?</h3>
						<select onChange={handleChange("capm")}>
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
							<option value="4">4</option>
							<option value="5">5</option>
							<option value="6">6</option>
							<option value="7">7</option>
							<option value="8">8</option>
							<option value="9">9</option>
							<option value="10+">10+</option>
						</select>
					</label>
					<label>
						<h3>Q. What kind of materials can you work with?</h3>
						<select onChange={handleChange("mat")}>
							<option value="Wood">Wood</option>
							<option value="Metal">Metal</option>
							<option value="Glass">Glass</option>
							<option value="Plastic">Plastic</option>
							<option value="Concrete">Concrete</option>
							<option value="Other">Other</option>
						</select>
					</label>
					<label>
						<h3>Q. Where are your based out of?</h3>
						<input
							type="text"
							name="location"
							onChange={handleChange("loc")}
							defaultValue={values.loc}
						/>
					</label>
					<input type="submit" value="Submit" />
				</form>
			</div>
		);
    }
}

export default Makerform
