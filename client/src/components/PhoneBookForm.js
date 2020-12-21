import React from 'react';
import style from './styles';

function PhoneBookForm(props) {
	function handleSubmit(){
		
		console.log('merhaba')
	}
	return (
		<form style={style.form.container} action = "/" method= "post">
			<label>First Name :</label>
			<br />
			<input
				style={style.form.inputs}
				className="userFirstName"
				name="firstName"
				type="text"
				id="firstName"
				placeholder="Enter your first name"
				// required
			/>
			<br />
			<label>Last Name :</label>
			<br />
			<input
				style={style.form.inputs}
				className="userLastName"
				name="lastName"
				type="password"
				id="LastName"
				placeholder="Enter your Last name"
				// required
			/>
			<br />
			<label>Phone :</label>
			<br />
			<input
				style={style.form.inputs}
				className="userPhone"
				name="phoneNumber"
				type="phoneNumber"
				id="phoneNumber"
				placeholder="Enter your Phone"
				// required
			/>
			<br />
			<input
				style={style.form.submitBtn}
				className="submitButton"
				name="submit"
				type="submit"
				value = "Add User"
			/>
			<br />
		</form>
	);
}

export default PhoneBookForm;
