import React, { useState } from 'react';

function InfoItem({ name, confirmed, deaths, recovered }) {
  return (
    <li className="list-group-item">
      <h3>{name}</h3>
      <span>Total: {confirmed}</span>
      {'  '}
      <span style={{ color: 'red' }}>Deaths: {deaths}</span>{'  '}
      <span style={{ color: 'green' }}>Recovered: {recovered}</span>
    </li>
  );
}

export default InfoItem;
