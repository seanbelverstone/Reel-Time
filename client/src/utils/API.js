// API calls below.
import axios from "axios";


export default {

    checkUser: function(username, password) {
        return axios.post("/api/auth", {username, password}) 
    }

}

//on other routes apart from this one, grab from cookies and after data on the post, add {header: {auth: Bearer + ACCESS TOKEN}}
// look up syntax for this