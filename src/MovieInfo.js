import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "../node_modules/react-router-dom";
import "./MovieInfo.css";

function MovieInfo() {
  let { id } = useParams();
  const [movie, setMovie] = useState();
  // console.log(movie, id);
  document.title = movie?.title ?? 'Loading...';
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      )
      .then((res) => setMovie(res.data));
  }, [id]);
  return (
    <div className="info item">
      {/* `{id} ` */}
      <div className="image">
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
          alt={movie?.original_title}
        />
      </div>
      <div className="content">
        <div className="header">
          <h1>
            {movie?.title} {new Date(movie?.release_date).toLocaleDateString()}{" "}
            <br /> <span>{movie?.original_title}</span>
          </h1>
          <span className="rating">
            <span className="ave">{movie?.vote_average}</span>
            <span className="popularity">{movie?.vote_count}</span>{" "}
          </span>
        </div>
        <table>
          <thead>
            <tr>
              <th>Adult</th>
              <th>Budget</th>
              <th>Genres</th>
              <th>Popularity</th>
              <th>Production Country(ies)</th>
              <th>Production Company</th>
              <th>Revenue</th>
              <th>Run Time</th>
              <th>Spoken Laguages</th>
            </tr>
          </thead>
          <tbody>
            {" "}
            <tr>
              <td>{movie?.adult ? "Yes" : "No"}</td>
              <td>{movie?.budget}</td>
              <td>
                {movie?.genres.map((el) => (
                  <span key={el.id}>{el.name} </span>
                ))}
              </td>
              <td>{movie?.popularity}</td>
              <td>
                {movie?.production_countries.map((el) => (
                  <div key={el.name}>
                    <img
                      src={`https://www.countryflags.io/${el.iso_3166_1}/flat/16.png`}
                      alt={el.name}
                    />{" "}
                    <span>{el.name}</span>
                  </div>
                ))}
              </td>
              <td>
                {movie?.production_companies.map((el) => (
                  <div key={el.id}>
                    <img
                      src={`https://www.countryflags.io/${el.origin_country}/flat/16.png`}
                      alt={el.origin_country}
                    />{" "}
                    <span>{el.name}</span>
                  </div>
                ))}
              </td>
              <td>{movie?.revenue}</td>
              <td>
                {(Number(movie?.runtime) / 60).toFixed(2).replace(".", ":") +
                  " h"}
              </td>
              <td>{movie?.spoken_languages.map((el) => <span key={el.id}>{el.english_name}</span>)}</td>
            </tr>
          </tbody>
        </table>
        <p>{movie?.overview}</p>
        <div className="image">
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
            alt={movie?.original_title}
          />
        </div>
      </div>
    </div>
  );
}

export default MovieInfo;
