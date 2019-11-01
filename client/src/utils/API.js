// API calls below.
import axios from "axios";


export default {

    checkUser: function(username, password) {
        return axios.post("/api/auth", {username, password}) 
    },

    getMovieFood: function(genreSelected, cuisineTypeSelected) {
        console.log(genreSelected + "    " + cuisineTypeSelected);  //t
        return axios.get("/api/auth", {genreSelected, cuisineTypeSelected}) 
    }
}

//on other routes apart from this one, grab from cookies and after data on the post, add {header: {auth: Bearer + ACCESS TOKEN}}
// look up syntax for this