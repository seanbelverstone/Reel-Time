// API calls below.
import axios from "axios";

var allCookies = document.cookie.split(";");
var userToken = allCookies[0].split("=");
var userTokenValue = userToken[1];

// getting userID
var tempA = document.cookie.search(";"); 
var userID = document.cookie.substr(3, tempA-3);

// getting token
var tempB = document.cookie.search("token=")
var tokin = document.cookie.substr(tempB+6, document.cookie.length);

export default {

    checkUser: function(username, password) {
        return axios.post("/api/auth", {username, password}) 
    },

    createUser: function(username, email, password) {
        return axios.post("/api/users/", {username, email, password})
    },

    getMovieFood: function(genreSelected, cuisineTypeSelected) {
        console.log("inside client/src/utils/API.js \n");  //deb

        return axios.get("/api/movieFood/", {
            genreSelected, cuisineTypeSelected,
            headers: {
                'Authorization': `Bearer ${tokin}`}})
    },

    getReels: function(id) {
        return axios.get(`/api/savedDates/${id}`, {
            headers: {
                'Authorization': `Bearer ${userTokenValue}`}})
    }
}

//on other routes apart from this one, grab from cookies and after data on the post, add {header: {auth: Bearer + ACCESS TOKEN}}
// look up syntax for this