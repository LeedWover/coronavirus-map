import React, {useState} from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  Circle
} from 'react-google-maps';

const MyMapComponent = withScriptjs(
  withGoogleMap(({details, cases}) => {
    return (
      
      <div style={{maxHeight: '100vh', overflowX: 'hidden'}}>
      <GoogleMap googleMapURL={process.env.REACT_APP_MAP_URL} defaultZoom={5} defaultCenter={{ lat: 53.0, lng: 9.0 }}>
        {cases ? cases.map(item => (
          <Circle
          key={item._id}
          defaultCenter={{
            lat: item.geo.lat,
            lng: item.geo.lng
          }}
          radius={Math.log(item.confirmed) * 10000}
          onClick={() => details(item)}
        />
        )) : null}
        
      </GoogleMap>
      <div style={{background: '#fff', opacity: '0.6', position: 'absolute', top: '0'}}>
          {cases.length ? (
            <>
              <span style={{padding: '3px 5px'}}>Last update: {cases[0].date}</span>
            </>
          
          ) : null
        }
      </div>
      </div>
    );
  })
);

export default MyMapComponent;
