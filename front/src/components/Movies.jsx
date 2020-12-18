import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default (props) => {
  const { movies, addMovies } = props;
  return (
    
      <div id="container">
        {movies &&
          movies.map((movie) => {
            return (
              <Card
                className="movieCard"
                key={movie.imdbID}
                style={{ width: "400px" }}
              >
                <Card.Img variant="top" src={movie.Poster} />
                <Card.Body>
                  <Card.Title>{movie.Title}</Card.Title>
                  <Card.Text>{movie.Production}</Card.Text>
                  <Link to={`/movie/${movie.imdbID}`}>
                    <Button variant="dark" >
                      Ver más
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            );
          })}
      </div>
     
  );
};