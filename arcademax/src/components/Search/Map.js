import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Circle } from '@react-google-maps/api';
import './search.css';

const containerStyle = {
  width: '60%',
  height: '400px'
};

const defaultCenter = {
  lat: -34.397,
  lng: 150.644
};

function Map({ location, radius }) {
  const [center, setMapCenter] = useState(defaultCenter);

  useEffect(() => {
    console.log('Map location:', location);
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
        <LoadScript googleMapsApiKey="AIzaSyDnIrd8-dw2tRW9y8YB03_yIkLNM4YWO9Q">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
          >
            <Circle
              center={center}
              radius={radius}
            />
          </GoogleMap>
        </LoadScript>
      )}
    </div>
  );
}

export default Map;
