import React, { useState, useEffect } from 'react';
import './App.css';

import Map from './Map';
import InfoContainer from './Countries';
import Details from './Details';

function App() {
  const [cases, setCases] = useState([]);
  const [details, setDetails] = useState([]);
  const [total, setTotal] = useState(0);
  const [deaths, setDeaths] = useState(0);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch('http://localhost:5000/api/cases');
    const data = await res.json();
    setCases(data);
    const totalNum = data.reduce((total, number) => total += number.confirmed ,0)
    const totalDeaths = data.reduce((total, number) => total += number.deaths ,0)
    setTotal(totalNum)
    setDeaths(totalDeaths)
  };
  
  const getDetails = (details) => {
    setDetails(details)
  }

  return (
    <div className="App row app_container">
      <div style={{padding: '0'}} className="col-2">
        <InfoContainer cases={cases} />
      </div>
      <div id="map_container" style={{padding: '0'}} className="col-8">
        <Map
          details={getDetails}
          cases={cases}
          isMarkerShown
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100vh` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
      <div className="col-2">
        <Details total={total} deaths={deaths} details={details} />
      </div>
    </div>
  );
}

export default App;
