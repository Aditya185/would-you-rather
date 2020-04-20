import { getInitialData,getUser } from '../utills/api'
import { receiveUsers } from '../actions/users'
import { receiveQuestions } from '../actions/questions'
import {receiveAuthLogin,receiveAuthLogout} from '../actions/authedUser';

import { showLoading, hideLoading } from 'react-redux-loading'


export function handleInitialData () {
  return (dispatch) => {
    dispatch(showLoading())
    return getInitialData()
      
      .then(({ users, questions }) => {

        dispatch(receiveUsers(users))
        dispatch(receiveQuestions(questions))
        dispatch(hideLoading())
      })
  }
} 


export function handleGetUsers () {
    return (dispatch) => {
      dispatch(showLoading())
      return getInitialData()
        
        .then(({ users }) => {
  
          dispatch(receiveUsers(users))
         
          dispatch(hideLoading())
        })
    }
  } 

  export function handleLoginUser(id) {
    return (dispatch) => {
        dispatch(showLoading());
        getUser(id).then((user) => {
            dispatch(receiveAuthLogin(user));
            dispatch(hideLoading());
        });
    };
}

export function handleLogoutUser() {
    return (dispatch) => {
        dispatch(showLoading());
        dispatch(receiveAuthLogout());
        dispatch(hideLoading());
    }
}