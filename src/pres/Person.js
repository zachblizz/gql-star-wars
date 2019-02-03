import React from 'react';

const Person = ({p}) => (
  <div
    style={{
      width: "20%",
      height: "20%",
      boxShadow: "0px 10px 10px -10px #ddd",
      margin: 10,
      border: "1px solid #eee",
      padding: 10,
      fontFamily: "arial"
    }}
  >
    <h3>{p.name}</h3>
    Films: {p.filmConnection.films.length}
  </div>
)

export default Person;