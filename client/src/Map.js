import React, {useState} from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  Circle
} from 'react-google-maps';

const MyMapComponent = withScriptjs(
  withGoogleMap(({isMarkerShown, details, cases}) => {
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
        
        {isMarkerShown && <Marker position={{ lat: 53.0, lng: 9.0 }} />}
      </GoogleMap>
      </div>
    );
  })
);

export default MyMapComponent;
