import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript} from '@react-google-maps/api';
import './search.css';

const containerStyle = {
  width: '60%',
  height: '400px'
};

const defaultCenter = {
  lat: -34.397,
  lng: 150.644
};

const Map = React.memo(({ location }) => {
  const [center, setMapCenter] = useState(defaultCenter);

  useEffect(() => {
    if (location && window.google && window.google.maps) {
      const geocoder = new window.google.maps.Geocoder();
      geocoder.geocode({ address: location }, (results, status) => {
        if (status === 'OK') {
          setMapCenter(results[0].geometry.location.toJSON());
        } else {
          alert('Geocode was not successful: ' + status);
        }
      });
    }
  }, [location]);

  return (
    <div className='map-container'>
      {location && (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={15}
        >
        </GoogleMap>
      )}
    </div>
  );
});
//
const MapWithScript = ({ location, radius }) => (
  <LoadScript googleMapsApiKey="AIzaSyDnIrd8-dw2tRW9y8YB03_yIkLNM4YWO9Q">
    <Map location={location} radius={radius} />
  </LoadScript>
);

export default MapWithScript;
