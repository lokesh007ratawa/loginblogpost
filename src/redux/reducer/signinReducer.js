import {SIGNIN_LOADING,SIGNIN_SUCCESS,SIGNIN_ERROR, } from "../action/actionType";


const initialState = {
    loading: true,
    error: null,
    signinDatas:[]
  }
  
  export default function signinReducer(state = initialState, action) {
    console.log("authorsssssREDUCERS",action)
    switch (action.type)
    {
      case SIGNIN_LOADING:
        return {
          ...state,
          loading: false,
        }
      case SIGNIN_SUCCESS: console.log("SIGNINREDUCER=================",action.signinDatas);
        return {
          ...state,
          loading: true,
          signinDatas: action.signinDatas,
          
  
        }
      case SIGNIN_ERROR:
        return {
          ...state,
          loading: true,
          error: false,
        }
  
      default:
        return state
    }
  }