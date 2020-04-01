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
          radius={item.confirmed >= 5000 ? item.confirmed * 3 : item.confirmed * 45}
          onClick={() => details(item)}
        />
        )) : null}
        
        {isMarkerShown && <Marker position={{ lat: 53.0, lng: 9.0 }} />}
      </GoogleMap>
      <div style={{background: '#fff', opacity: '0.4', position: 'absolute', top: '0', left: '50%'}}>
          {details ? (
            <>
              <span style={{fontSize: '5em'}}>{details.name}</span><br/>
              <span style={{fontSize: '5em'}}>{details.confirmed}</span><br/>
            </>
          
          ) : null
        }
      </div>
      </div>
    );
  })
);

export default MyMapComponent;
