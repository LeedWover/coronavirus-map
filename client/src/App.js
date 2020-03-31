import React, { useState, useEffect } from 'react';
import './App.css';

import Map from './Map';
import InfoContainer from './InfoContainer';

function App() {
  const [cases, setCases] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('http://localhost:5000/api/cases');
      const data = await res.json();
      setCases(data);
    };
    fetchData();
  }, []);
  console.log(cases);
  return (
    <div className="App row app_container">
      <div style={{padding: '0'}} className="col-3">
        <InfoContainer cases={cases} />
      </div>
      <div id="map_container" style={{padding: '0'}} className="col-9">
        <Map
          cases={cases}
          isMarkerShown
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100vh` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    </div>
  );
}

export default App;
