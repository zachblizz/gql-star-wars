import React from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

import { requestPeople } from '../redux/reducers/data';
import Person from '../pres/Person';

const Rql = ({getPeople, people}) => (
  <>
    <Link to="/">&larr; go back</Link>
    <button onClick={getPeople}>redux names</button>
    <div
      style={{
        display: "flex",
        flexFlow: "row wrap",
        height: "100%"
      }}
    >
    {
      people && people.map(p => (
        <Person p={p} key={p.name} />
      ))
    }
    </div>
  </>
)

const mapStateToProps = ({people}) => {
  return {
    people
  }
}
const mapDispatchToProps = dispatch => bindActionCreators({
  getPeople: () => requestPeople()
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Rql);