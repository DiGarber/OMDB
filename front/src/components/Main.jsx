import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import HeadMenu from "./HeadMenu";
import MoviesContainer from "../containers/MoviesContainer";
import MovieContainer from "../containers/MovieContainer";
import Login from "./Login";
import Register from "./Register";
import { getUser } from "../store/action-creators/user";
import { connect } from "react-redux";

const App = ({ getUser, user }) => {
  useEffect(() => {
    getUser();
  }, []);
  return (
    <div>
      <HeadMenu />
      <Switch>
        <Route exact path="/" component={MoviesContainer} />
        <Route exact path="/movie/:id" component={MovieContainer} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
       
        <Redirect to="/" />
      </Switch>
   
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getUser: () => dispatch(getUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
