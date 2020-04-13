import React, { useState } from 'react';

function InfoItem({ name, confirmed, deaths, recovered }) {
  return (
    <li className="list-group-item text-left">
      <span className="text-danger font-weight-bold">{confirmed}</span>{" "}
      <span className="text-muted font-weight-bold">{name}</span>
    </li>
  );
}

export default InfoItem;
