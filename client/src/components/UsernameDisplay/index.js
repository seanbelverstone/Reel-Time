import React from "react";
import "./style.css";

// const allCookies = document.cookie.split(";");
// const userNameToken = allCookies[14].split("=");
// const userNameValue = userNameToken[1];
// const allCookies = document.cookie.split(";");
// const userNameToken = allCookies[2].split("=");
// const userNameValue = userNameToken[1];
// console.log(userNameValue);

function UsernameDisplay() {
    return (
        <p className="username-text">Hi, username!</p>
    );
}

export default UsernameDisplay;