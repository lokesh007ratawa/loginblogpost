import { call, put, takeLatest } from 'redux-saga/effects';
import {SIGNIN_LOADING,SIGNIN_SUCCESS,SIGNIN_ERROR, SIGNIN, } from "../action/actionType";
import {signinApi} from '../axios/api';


function* fetchSignin(action) {
    // const { payload } = action;
   // console.log("SIGNIN saga", payload);
    yield put({ type: SIGNIN_LOADING });
   try {
      const signin = yield call(signinApi,`/signup`);
      let data =[];
      data = signin.data;
    //   let mapDatas = [];
    //   mapDatas = data.map((y)=>y).filter((x)=>{return {userNames:x.userName,passwords:x.password}})
      console.log("SIGNINDatasapi",data)
      yield put({  type:SIGNIN_SUCCESS, signinDatas: data});
   } catch (e) {
      yield put({  type:SIGNIN_ERROR, message: e.message});
   }
}

function* signinSaga() {
   yield takeLatest(SIGNIN, fetchSignin);
}

export default signinSaga;