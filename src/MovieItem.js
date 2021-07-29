import React from "react";
import "./MovieItem.css";
import { BrowserRouter as Router, Switch, Route, Link } from "../node_modules/react-router-dom";

function MovieItem({ item }) {
  // console.log(item)
  return (
    <div className="item">
      <div className="image">
        <img
          src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
          alt={item.original_title}
        />
      </div>
      <div className="content">
        <div className="header">
          <h1>
            {item.title} {new Date(item.release_date).toLocaleDateString()}{" "}
            <br /> <span>{item.original_title}</span>
          </h1>
          <span className="rating">
            <span className="ave">{item.vote_average}</span>
            <span className="popularity">{item.vote_count}</span>{" "}
          </span>
        </div>

        <p>{item.overview}</p>
        <div className="image">
          <img
            src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
            alt={item.original_title}
          />
        </div>
        <Link to={item.id.toString()} className="details">
          Details...
        </Link>
      </div>
    </div>
  );
}

export default MovieItem;
