// API calls below.
import axios from "axios";

var userToken = document.cookie.toString();

export default {

    checkUser: function(username, password) {
        return axios.post("/api/auth", {username, password}) 
    },

    createUser: function(username, email, password) {
        return axios.post("/api/users/", {username, email, password})
    },

    getReels: function(id) {
        return axios.post(`/api/savedDates/${id}`, {headers: {'Authorization': 'Bearer' + userToken}})
    }
}

//on other routes apart from this one, grab from cookies and after data on the post, add {header: {auth: Bearer + ACCESS TOKEN}}
// look up syntax for this