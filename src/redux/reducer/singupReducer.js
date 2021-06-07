import {SIGNUP_LOADING,SIGNUP_SUCCESS,SIGNUP_ERROR, } from "../action/actionType";


const initialState = {
    loading: true,
    error: null,
    signupDatas:[]
  }
  
  export default function signupReducer(state = initialState, action) {
      // const payload = action
      // console.log("action",payload.payload)
    switch (action.type)
    {
      case SIGNUP_LOADING:
        return {
          ...state,
          loading: false,
        }
      case SIGNUP_SUCCESS: console.log("signupReducer=================", action);
        return {
          ...state,
          loading: true,
          signupDatas: action,
  
        }
      case SIGNUP_ERROR:
        return {
          ...state,
          loading: true,
          error: false,
        }
  
      default:
        return state
    }
  }