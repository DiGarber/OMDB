import React from "react";
import Figure from "react-bootstrap/Figure";
import { connect } from "react-redux";

const Movie = ({movie}) => {
 

  return (
    <Figure>
      <Figure.Image
        
        src={movie.Poster}
        className="poster"
      />
      <Figure.Caption id="">
        <h1>{movie.Title}</h1>
        <h5>{movie.Year}</h5>
        <br/>
        <h5>{movie.Type}</h5>
        <br/>
        <h5>{movie.Plot}</h5>
        <br/>
        <h5>{movie.Actors}</h5>
        <br/>
        <h5>Poducida por {movie.Production}</h5>
        <br/>
        <h5>Sitio web: {movie.Website}</h5>
        <br/>
        <h5>Premios: {movie.Awards}</h5>
        <br />
        <h4> Rating imdb: {movie.imdbRating}</h4>
      </Figure.Caption>
    </Figure>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    movie: ownProps.movie,
    user: state.user,
  };
};


export default connect(mapStateToProps, null)(Movie);