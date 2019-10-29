// API calls below.
import axios from "axios";


export default {

    checkUser: function(username, password) {
        return axios.post("/api/auth", username, password)
        .then(results => {
            if (results.message === "Unable to Authorize") {
                console.log(results);
            }
        });
    }

}