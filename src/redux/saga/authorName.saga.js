import { call, put, takeLatest } from 'redux-saga/effects';
import {AUTHORNAME_LOADING,AUTHORNAME_SUCCESS,AUTHORNAME_ERROR, AUTHORNAME, } from "../action/actionType";
import {authorNameApi} from '../axios/api';


function* fetchAuthor(action) {
    // const { payload } = action;
   // console.log("authorName saga", payload);
    yield put({ type: AUTHORNAME_LOADING });
   try {
      const authorName = yield call(authorNameApi,`/authorName`);
      let data =[];
      data = authorName.data;
      let mapDatas = [];
      mapDatas = data.map((x,index)=>{return{ id: index + 1,authorName: x.authorName}})
      console.log("AUTHORNAMEDatasapi",authorName.data)
      yield put({  type:AUTHORNAME_SUCCESS, authorNameDatas: mapDatas});
   } catch (e) {
      yield put({  type:AUTHORNAME_ERROR, message: e.message});
   }
}

function* authorSaga() {
   yield takeLatest(AUTHORNAME, fetchAuthor);
}

export default authorSaga;