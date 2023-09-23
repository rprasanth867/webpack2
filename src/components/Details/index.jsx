import React, { useState } from 'react';

const details = {
  name: 'Prasanth',
  occupation: 'Frontend Developer'
};

const moreDetails = {
  ...details,
  age: 26,
  mobile: '9985702662'
};

function Details() {
  const [d, setD] = useState({});
  return (
    <section>
      <h3>My details: </h3>
      <button onClick={() => setD(details)}>Details</button>
      <button onClick={() => setD(moreDetails)}>More Details</button>

      <ul>
        {Object.keys(d).map((key) => (
          <li key={key}>{`${key.toUpperCase()}       :       ${d[key]}`}</li>
        ))}
      </ul>
    </section>
  );
}

export default Details;
