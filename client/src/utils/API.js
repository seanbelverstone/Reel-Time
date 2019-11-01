// API calls below.
import axios from "axios";

var allCookies = document.cookie.split(";");
var userToken = allCookies[0].split("=");
var userTokenValue = userToken[1];

console.log("8888");  //deb
console.log(document.cookie);
console.log("8888");  //deb

// getting userID
var tempA = document.cookie.search(";");  // index of searched string
var userID = document.cookie.substr(3, tempA-3);
console.log("userID is");  //deb
console.log(userID);  //deb

// getting token
var tempB = document.cookie.search("token=")
var tokin = document.cookie.substr(tempB+6, document.cookie.length);
console.log("tokin is");  //deb
console.log(tokin);  //deb

export default {

    checkUser: function(username, password) {
        return axios.post("/api/auth", {username, password}) 
    },

    createUser: function(username, email, password) {
        return axios.post("/api/users/", {username, email, password})
    },

    getMovieFood: function(cred, genreSelected, cuisineTypeSelected) {
        console.log("inside client/src/utils/API.js \n");  //deb

        // cred contained: "id" - userID, "token" - is the jwt assigned
        // console.log(cred);  //deb

        // console.log(`\n${genreSelected} - ${cuisineTypeSelected}`);  // debugging

        // console.log("a");  //deb
        // console.log(cred);
        // console.log("b");  //deb
        // console.log(genreSelected);
        // console.log("c");  //deb
        // console.log(cuisineTypeSelected);  //deb
        // console.log("====");  //deb
        
        // console.log("1");  //deb
        // console.log(allCookies);
        // console.log("2");  //deb
        // console.log(userToken);
        // console.log("3");  //deb
        // console.log(userTokenValue);  //deb
        // console.log("----");  //deb
        // console.log(allCookies[1].token);  //deb





        return axios.get("/api/movieFood/", {

            // headers: {
            //     "bearer": `${cred.token}`},
            // genreSelected, cuisineTypeSelected}})

            // headers: {
            //     'Authorization': `Bearer ${userTokenValue}`}})

            headers: {
                'Authorization': `Bearer ${tokin}`}})

            // headers: {
            //     'Authorization': `Bearer ${cred.token}`}})
        

        
    },

    getReels: function(id) {
        return axios.get(`/api/savedDates/${id}`, {
            headers: {
                'Authorization': `Bearer ${userTokenValue}`}})
    }
}

//on other routes apart from this one, grab from cookies and after data on the post, add {header: {auth: Bearer + ACCESS TOKEN}}
// look up syntax for this