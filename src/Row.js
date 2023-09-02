import React from "react";
import { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

const baseUrlPoster = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  // setting up state for movies
  const [movies, setMovies] = useState([]);
  const [trailerUrl,setTrailerUrl] = useState("");

  const handleClick= (movie) =>{

    // if trailer url is already there then set it to empty
    if(trailerUrl){
      setTrailerUrl("");
    }else{
      // here movie trailer is nmp module which finds a movie trailer for the name we passed
      movieTrailer(movie?.title || "")
      .then(url=>{
        // this gives us the part after the ? which is for the trailer
        const urlParams = new URLSearchParams(new URL(url).search);
        setTrailerUrl(urlParams.get('v'));
      })
      .catch((error) => console.log(error));
    }

  }


  // We need to run a snippet of code on a specific condition/variable change ==> achieve this using useEffect()
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);


  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1
    },
  };

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row-posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={()=> handleClick(movie)}
            className={`row-poster ${isLargeRow && "row-poster-large"}`}
            src={`${baseUrlPoster}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
            alt={movie.name}
          />
        ))}
      </div>
      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts}/>}
    </div>
  );
}

export default Row;
