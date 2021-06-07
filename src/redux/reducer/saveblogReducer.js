import {SAVEBLOGPOST_LOADING,SAVEBLOGPOST_SUCCESS,SAVEBLOGPOST_ERROR, } from "../action/actionType";


const initialState = {
    loading: true,
    error: null,
    saveblogData:[]
  }
  
  export default function saveblogReducer(state = initialState, action) {
    console.log("reducersaveblogaction",action)
    switch (action.type)
    {
      case SAVEBLOGPOST_LOADING:
        return {
          ...state,
          loading: false,
        }
      case SAVEBLOGPOST_SUCCESS: console.log("responseinreducerfromsaveblogsaga=================",action);
        return {
          ...state,
          loading: true,
          saveblogData: action,
  
        }
      case SAVEBLOGPOST_ERROR:
        return {
          ...state,
          loading: true,
          error: false,
        }
  
      default:
        return state
    }
  }