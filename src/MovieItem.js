import React from "react";
import "./MovieItem.css";

function MovieItem({ item }) {
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
      </div>
    </div>
  );
}

export default MovieItem;
