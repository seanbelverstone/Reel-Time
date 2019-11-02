import axios from "axios";

module.exports = {
    api: (request, response) => {
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.THEMOVIEDB_API_KEY}&language=en-US&include_adult=false&include_video=false&page=2&with_genres=${request.params.movie}`)
        .then(results => {
            response.json(results.data);
        });

    }
}
     