import {AUTHORNAME_LOADING,AUTHORNAME_SUCCESS,AUTHORNAME_ERROR, } from "../action/actionType";


const initialState = {
    loading: true,
    error: null,
    authorNameDatas:[]
  }
  
  export default function autorNameReducer(state = initialState, action) {
    console.log("authorsssss",action)
    switch (action.type)
    {
      case AUTHORNAME_LOADING:
        return {
          ...state,
          loading: false,
        }
      case AUTHORNAME_SUCCESS: console.log("authorName=================",action.authorNameDatas);
        return {
          ...state,
          loading: true,
          authorNameDatas: action.authorNameDatas,
  
        }
      case AUTHORNAME_ERROR:
        return {
          ...state,
          loading: true,
          error: false,
        }
  
      default:
        return state
    }
  }