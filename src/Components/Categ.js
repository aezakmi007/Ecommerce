/* eslint-disable react/button-has-type */
import React from 'react';
import { Link } from 'react-router-dom';

function Categ({ name, desc, id }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{desc}</p>
      <Link to={`/categories/${id}`}>Read more</Link>
      <button>Buy</button>
    </div>
  );
}

export default Categ;
