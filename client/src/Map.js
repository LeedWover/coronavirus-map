import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, Circle } from "react-google-maps"

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={5}
    defaultCenter={{ lat: 53.0000, lng: 9.0000 }}
  >
    <Circle
                  defaultCenter={{
                    lat: 47.1817585,
                    lng: 19.5060937
                  }}
                  radius={3000 * 80}
                />
    {props.isMarkerShown && <Marker position={{ lat: 53.0000, lng: 9.0000 }} />}
  </GoogleMap>
))

export default MyMapComponent