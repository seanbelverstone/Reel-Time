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

    getReels: function(id) {
        return axios.get(`/api/savedDates/${id}`, {
            headers: {
                'Authorization': `Bearer ${userTokenValue}`}})
    },

    saveReel: function(movieTitle, movieImage, movieSynopsis, recipeTitle, recipeImage, recipeLink, rating, user_id) {
        return axios.post("/api/savedDates", {movieTitle, movieImage, movieSynopsis, recipeTitle, recipeImage, recipeLink, rating, user_id})
    }
}

//on other routes apart from this one, grab from cookies and after data on the post, add {header: {auth: Bearer + ACCESS TOKEN}}
// look up syntax for this