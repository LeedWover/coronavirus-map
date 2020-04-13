import React, { useState } from 'react';

import InfoItem from './Country';

function Details({ total, details, deaths }) {
  return (
    <div>
      <div className="card m-1">
        <div className="card-body">
          <h2 className="card-title">Total:</h2>
          <h3 className="card-subtitle text-muted">{total.toLocaleString()}</h3>
          <h2 className="card-title">Deaths:</h2>
          <h3 className="card-subtitle text-danger">{deaths.toLocaleString()}</h3>
        </div>
      </div>
      {details ? (
        <div className="card m-1">
          <div className="card-body">
          <h2>{details.name}</h2>
          <h3 className="card-title">Total:</h3>
          <h4 className="text-muted">{details.confirmed}</h4>
          <h3 className="card-title">Deaths:</h3>
          <h4 className="text-danger">{details.deaths}</h4>
          <h3 className="card-title">Recovered:</h3>
          <h4 className="text-success">{details.recovered}</h4>
          </div>
        </div>
      ) : (<div className="card m-1">
      <div className="card-body">
        <h5 className="text-muted">Click to a country to see details...</h5>
      </div>
    </div>)}
    </div>
  );
}

export default Details;
