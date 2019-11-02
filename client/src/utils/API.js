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
        console.log(process.env.THEMOVIEDB_API_KEY);
        return axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.THEMOVIEDB_API_KEY}&language=en-US&include_adult=false&include_video=false&page=2&with_genres=${movie}`)
    },

    searchRecipe: function(recipe) {
        return axios.get(`https://api.edamam.com/search?q=""&app_id=${process.env.EDAMAM_ID}&app_key=${process.env.EDAMAM_API_KEY}&cuisineType=${recipe}`)
    }
}

//on other routes apart from this one, grab from cookies and after data on the post, add {header: {auth: Bearer + ACCESS TOKEN}}
// look up syntax for this