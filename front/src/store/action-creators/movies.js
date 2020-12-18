import { GET_MOVIES, GET_MOVIE, GET_FAVS } from "../constants"
import axios from "axios";

const recieveMovies = (movies) => {
  return {
    type: GET_MOVIES,
    movies,
  };
};
const recieveMovie = (movie) => {
  return {
    type: GET_MOVIE,
    movie,
  };
};
/*
const getFavs = (movies) => {
  return {
    type: "GET_FAVS",
    movies,
  };
};

export const fetchFavs = () => (dispatch) =>
  axios
    .get("/favoritos")
    .then((res) => res.data)
    .then((movies) => dispatch(getFavs(movies)));
*/

export const fetchMovies = () => (dispatch) =>
  axios
    .get("https://www.omdbapi.com/?apikey=480adf34&s=titanic")
    .then((res) => res.data)
    .then((movies) => dispatch(recieveMovies(movies.Search)));

export const fetchMovie = (movie) => (dispatch) =>
  axios
    .get(`https://www.omdbapi.com/?apikey=480adf34&s=${movie}`)
    .then((res) => res.data)
    .then((movie) => dispatch(recieveMovies(movie.Search)));

export const fetchId = (id) => (dispatch) =>
  axios
    .get(`https://www.omdbapi.com/?apikey=480adf34&i=${id}&plot=full`)
    .then((res) => res.data)
    .then((movie) => dispatch(recieveMovie(movie)));

