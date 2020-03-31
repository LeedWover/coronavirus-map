import React, { useState } from 'react';

import InfoItem from './InfoItem';

function InfoContainer({ cases }) {
  return (
    <div className="info_container" style={{ maxHeight: '100vh', overflowX: 'hidden' }}>
      <ul className="list-group info_list">
        {cases
          ? cases.map(item => (
              <InfoItem key={item._id} name={item.name} confirmed={item.confirmed} deaths={item.deaths} recovered={item.recovered} />
            ))
          : 'Loading...'}
      </ul>
    </div>
  );
}

export default InfoContainer;
