const initialState = {
  loading: false,
  users: [],
  error: "",
};

import {createStore,applyMiddleware} from 'redux';
import ThunkMiddleware from 'redux-thunk';
import axios from 'axios';

const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};

const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
};

const reducer = (state = initialState,action){
  switch(action.type){
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true  
      }
    case FETCH_USERS_SUCCESS:
      return{
        ...state,
        users:action.payload,
        loading: false
      }
    case FETCH_USERS_FAILURE:
      return{
        ...state,
        error:action.payload,
        loading: false,
        users: []
      }
    default:
      return state  
  }
}

const fetchUsers = () => {
  return function(dispatch){
    dispatch(fetchUsersRequest());
    axios.get('https://jsonplaceholder.typicode/users')
    .then(response=>{
      const users = response.data.map(user =>user.id)
      dispatch(fetchUsersSuccess(users));
    }).catch(error=>{
      dispatch(fetchUsersFailure(error));
    })
  }
}

const store = createStore(reducer,applyMiddleware(ThunkMiddleware));
store.subscribe(()=>{ console.log(store.getState())})
store.dispatch(fetchUsers)