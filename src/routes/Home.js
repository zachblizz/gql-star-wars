import React from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router-dom';
import Person from '../pres/Person';

import { queries } from '../graphQL';
import { GET_PEOPLE } from '../redux/reducers/data';

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

export default graphql(
  queries[GET_PEOPLE]
)(Home);