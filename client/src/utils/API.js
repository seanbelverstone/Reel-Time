// API calls below.
import axios from "axios";

var allCookies = document.cookie.split(";");
var userToken = allCookies[0].split("=");
var userTokenValue = userToken[1];

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
        console.log(cred);  //deb

        console.log(`\n${genreSelected} - ${cuisineTypeSelected}`);  // debugging

        return axios.get("/api/movieFood/", {
            genreSelected, cuisineTypeSelected
        }); 
        
    },

    getReels: function(id) {
        return axios.get(`/api/savedDates/${id}`, {
            headers: {
                'Authorization': `Bearer ${userTokenValue}`}})
    }
}

//on other routes apart from this one, grab from cookies and after data on the post, add {header: {auth: Bearer + ACCESS TOKEN}}
// look up syntax for this