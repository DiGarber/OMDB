import {GET_MOVIES, GET_MOVIE, USER} from "../constants"

const initialState = {
    content: [],
    movie: {},
    user: {},
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case GET_MOVIES:
        return { ...state, content: action.movies };
      case GET_MOVIE:
        return { ...state, movie: action.movie };
      case USER:
        return { ...state, user: action.user };

    }
  
    return state;
  };