import axios from "axios";


// Base url to make request to get movies


const instance = axios.create({ // axios gives a functionality to create an instance to make request
    baseURL: "https://api.themoviedb.org/3"
});

export default instance;

