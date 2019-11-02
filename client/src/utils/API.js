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

    searchMovie: function(movie) {
        return axios.get(`/api/search/${movie}`,  {
            headers: {
                'Authorization': `Bearer ${userTokenValue}`}})
    }

    // searchRecipe: function(recipe) {
    //     return axios.get(`https://api.edamam.com/search?q=""&app_id=${process.env.EDAMAM_ID}&app_key=${process.env.EDAMAM_API_KEY}&cuisineType=${recipe}`, { 
    //         headers: {
    //         'Authorization': `Bearer ${userTokenValue}`}})
    // }
}

//on other routes apart from this one, grab from cookies and after data on the post, add {header: {auth: Bearer + ACCESS TOKEN}}
// look up syntax for this