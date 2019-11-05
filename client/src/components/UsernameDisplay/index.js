import React from "react";
import "./style.css";

const UsernameDisplay = () => {

	// parsing username from document.cookie, document.cookie is defined in
	// client\src\components\LoginForm\index.js
	let temp = document.cookie.search("name=");
	let uNameArray = document.cookie.substring(temp+5).split(";");
	let uName = uNameArray[0];
	console.log(uName);

	return(
		<div>
			<p className="username-text">Hi, {uName}!</p>
		</div>
	);
}

export default UsernameDisplay;