import React, { useState } from 'react';

function InfoItem({ name, confirmed, deaths, recovered }) {
  return (
    <li className="list-group-item">
      <div className="font-weight-bold">{name}</div>
      <small >Total: {confirmed}</small>
      {'  '}
      <small style={{ color: 'red' }}>Deaths: {deaths}</small>{'  '}
      <small style={{ color: 'green' }}>Recovered: {recovered}</small>
    </li>
  );
}

export default InfoItem;
