const API_KEY = '2e3432b82d8d2dc2397fc83bf9733e84';


const requests = {
    fetchNetflixOriginals : `/discover/tv?api_key=${API_KEY}&with_watch_providers=8`,
    fetchTrending : `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchTopRated : `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    fetchUpcomingIndia : `/movie/upcoming?api_key=${API_KEY}&region=in`,
    fetchActionMovies : `/discover/movie?with_genres=28&api_key=${API_KEY}`,
    fetchComedyMovies : `/discover/movie?with_genres=35&api_key=${API_KEY}`,
    fetchDocumentaryMovies : `/discover/movie?with_genres=99&api_key=${API_KEY}`,
    fetchHorrorMovies : `/discover/movie?with_genres=27&api_key=${API_KEY}`,
    fetchCrimeMovies : `/discover/movie?with_genres=80&api_key=${API_KEY}`
}

export default requests;
