import axios from "axios";

module.exports = {
    movieApi: (request, response) => {
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.THEMOVIEDB_API_KEY}&language=en-US&include_adult=false&include_video=false&page=2&with_genres=${request.params.movie}`)
        .then(results => {
            response.json(results.data);
        });
    },

    recipeApi: (request, response) => {
        axios.get(`https://api.edamam.com/search?q=\"${request.params.recipe} cuisine\"&app_id=${process.env.EDAMAM_ID}&app_key=${process.env.EDAMAM_API_KEY}`)
        .then(results => {
            response.json(results.data);
        });
    }
}
     