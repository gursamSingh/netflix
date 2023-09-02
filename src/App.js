import React from 'react';
import './App.css';
import requests from './requests';
import Row from './Row';
import Banner from './Banner';
import Nav from './Nav';

function App() {
  return (
    <div className="app">

      {/* Nav bar */}
      <Nav/>
      <Banner/>

      <Row title=" Netflix Originals " fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
      <Row title=" Top Rated " fetchUrl={requests.fetchTopRated}/>
      <Row title=" Trending Now " fetchUrl={requests.fetchTrending}/>
      <Row title=" Upcoming India " fetchUrl={requests.fetchUpcomingIndia}/>
      <Row title=" Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title=" Comedy Movies " fetchUrl={requests.fetchComedyMovies}/>
      <Row title=" Horror Movies " fetchUrl={requests.fetchHorrorMovies}/>
      <Row title=" Crime Movies " fetchUrl={requests.fetchCrimeMovies}/>
      <Row title=" Documentaries " fetchUrl={requests.fetchDocumentaryMovies}/>

    </div>
  );
}

export default App;
