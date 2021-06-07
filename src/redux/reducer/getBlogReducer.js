import {GETBLOGPOST_LOADING,GETBLOGPOST_SUCCESS,GETBLOGPOST_ERROR, } from "../action/actionType";


const initialState = {
    loading: true,
    error: null,
    blogData:[]
  }
  
  export default function getBlogReducer(state = initialState, action) {
    console.log("getblogRedcuer",action)
    switch (action.type)
    {
      case GETBLOGPOST_LOADING:
        return {
          ...state,
          loading: false,
        }
      case GETBLOGPOST_SUCCESS: console.log("getblogdata=================",action.blogData);
        return {
          ...state,
          loading: true,
          blogData: action.blogData,
          
  
        }
      case GETBLOGPOST_ERROR:
        return {
          ...state,
          loading: true,
          error: false,
        }
  
      default:
        return state
    }
  }