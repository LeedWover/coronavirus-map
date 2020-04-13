import React, { useState } from 'react';

import Countries from './Country';

function InfoContainer({ cases }) {
  return (
    <div className="info_container" style={{ maxHeight: '100vh', overflowX: 'hidden' }}>
      <ul className="list-group info_list">
        {cases
          ? cases.sort((a, b) => b.confirmed - a.confirmed).map(item => (
              <Countries key={item._id} name={item.name} confirmed={item.confirmed} deaths={item.deaths} recovered={item.recovered} />
            ))
          : 'Loading...'}
      </ul>
    </div>
  );
}

export default InfoContainer;
