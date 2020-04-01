import React, { useState } from 'react';

import InfoItem from './Country';

function Details({ total, details }) {
  return (
    <div>
      <div>Total:</div>
      <div>{total}</div>
      <div>
        <div>Deaths:</div>
        
      </div>
      {details ? (
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
