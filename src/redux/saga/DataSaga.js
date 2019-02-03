import {
  put, 
  takeLatest, 
  all 
} from "redux-saga/effects";
import { client, queries } from '../../graphQL';
import { receivePeople, GET_PEOPLE } from "../reducers/data";

export function* getData({type}) {
  try {
    const resp = yield client.query({
      query: queries[type]
    });
    
    if (resp.data.allPeople) {
      yield put(receivePeople(resp.data.allPeople.people));
    }
  } catch (e) {
    console.log(e);
  }
}

export default function* mySaga() {
  yield all([
    takeLatest(GET_PEOPLE, getData)
  ])
}