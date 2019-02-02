import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import {Link} from 'react-router-dom';
import Person from '../pres/Person';

const allNamesQuery = gql`
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
}`;

const Home = ({data: {allPeople}}) => (
  <>
    <Link to="/reduxQL">Redux QL</Link>
    {
      allPeople && allPeople.people.map(p => 
        <Person p={p} key={p.name} />
      )
    }
  </>
);

export default graphql(allNamesQuery)(Home);