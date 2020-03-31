import React from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  Circle
} from 'react-google-maps';

const MyMapComponent = withScriptjs(
  withGoogleMap(({isMarkerShown, cases}) => {
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
          radius={item.confirmed >= 10000 ? item.confirmed * 3.6 : item.confirmed * 25}
        />
        )) : null}
        
        {isMarkerShown && <Marker position={{ lat: 53.0, lng: 9.0 }} />}
      </GoogleMap>
      </div>
    );
  })
);

export default MyMapComponent;
