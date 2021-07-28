import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieItem from "./MovieItem";
import "./Dashboard.css";

function Dashboard() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  console.log(movies);
  const generateUrl = (query, search="") => {
      
https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&query=s&page=1&include_adult=false
    return `https://api.themoviedb.org/3/${query}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1${search? `&query=${search}`: ''}`;
  };

  useEffect(() => {
    if (!search){
      axios.get(generateUrl("movie/top_rated")).then((res) => setMovies(res.data));
    } else {
        axios.get(generateUrl("search/movie",search)).then((res) => setMovies(res.data))
    }
  }, [search]);

  return (
    <div className="dashboard">
      <div className="search">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search 🔍"
          type="text"
        />
        <button onClick={() => setSearch("")}>Clear</button>
      </div>
      <h1>{search? `Search for: ${search}` : 'Top 20 rated films'}</h1>
      {movies.results?.map((el) => (
        <MovieItem item={el} />
      ))}
    </div>
  );
}

export default Dashboard;
