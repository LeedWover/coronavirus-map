import React, { useState } from 'react';

import InfoItem from './Country';

function Details({ total, details, deaths }) {
  return (
    <div>
      <div>Total:</div>
      <div>{total}</div>
      <div>
        <div>Deaths:</div>
        <div>{deaths}</div>
      </div>
      {details.length ? (
        <div>
          <div>Country:</div>
          <div>{details.name}</div>
          <div>{details.confirmed}</div>
          <div>{details.deaths}</div>
          <div>{details.recovered}</div>
        </div>
      ) : null}
    </div>
  );
}

export default Details;
