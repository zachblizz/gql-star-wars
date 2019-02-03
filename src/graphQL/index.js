import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';

import { GET_PEOPLE } from '../redux/reducers/data'

export const client = new ApolloClient({
  uri: "http://localhost:54391"
});


export const queries = {
  [GET_PEOPLE]: gql`
  {
    allPeople {
      people {
        name,
        birthYear,
        height,
        homeworld {
          name
        },
        filmConnection {
          films {
            title,
            episodeID,
            releaseDate
          }
        }
      }
    }
  }`
}