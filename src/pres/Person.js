import React from 'react';

const Person = ({p}) => (
  <div
    style={{
      width: "20%",
      height: "20%",
      boxShadow: "0px 10px 10px -10px #333",
      margin: 10
    }}
  >
    {p.name}
  </div>
)

export default Person;