import { USER } from "../constants"
import axios from "axios";

const setUser = (user) => {
  return {
    type: USER,
    user,
  };
};

export const fetchUser = ({ email, password }) => (dispatch) =>
  axios
    .post("/api/login", { email, password })
    .then((res) => res.data)
    .then((user) => dispatch(setUser(user)));

export const getUser = () => (dispatch) => {
  axios
    .get("/api/user")
    .then((res) => res.data)
    .then((user) => dispatch(setUser(user)));
};

export const logOut = () => (dispatch) =>
  axios
    .post("/api/logout")
    .then((res) => res.data)
    .then(() => dispatch(setUser({})))
    .then(()=> res.redirect("/"));