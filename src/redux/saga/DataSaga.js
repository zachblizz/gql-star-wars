import {
  put, 
  takeLatest, 
  all 
} from "redux-saga/effects";
import { client } from '../../graphQL';
import { receivePeople } from "../reducers/data";
import gql from 'graphql-tag';

const queries = {
  "GET_PEOPLE": gql`
  {
    allPeople {
      people {
        name,
        gender,
        birthYear,
        height,
        homeworld {
          name
        },
        species {
          name
        }
      }
    }
  }`
}

export function* getData({type}) {
  try {
    const resp = yield client.query({
      query: queries[type]
    });
    
    if (resp.data.allPeople)
      yield put(receivePeople(resp.data.allPeople.people));
  } catch (e) {
    console.log(e);
  }
}

export default function* mySaga() {
  yield all([
    takeLatest("GET_PEOPLE", getData)
  ])
}