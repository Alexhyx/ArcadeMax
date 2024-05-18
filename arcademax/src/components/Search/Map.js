import React from 'react';
import { GoogleMap, LoadScript}  from '@react-google-maps/api';
import { useState, useEffect } from 'react';


const containerStyle = {
  width: '400px',
  height: '400px'
};

const defaultCenter = {
  lat: -34.397,
  lng: 150.644
};

function Map({location}) {
    
    const [center, setMapCenter] = useState(defaultCenter);
    /*const [location, setlocation] = useState('');

    const changeLocation = (event) => {
        setlocation(event.target.value);
      };
    
      const locationFinder = () => {
        const geocoder = new window.google.maps.Geocoder();
        geocoder.geocode({ address: location }, (results, status) => {
          if (status === 'OK') {
            setMapCenter(results[0].geometry.location);
          } else {
            alert('Geocode was not successful: ' + status);
          }
        });
      };*/
      useEffect(() => {
        if (location) {
          const geocoder = new window.google.maps.Geocoder();
          geocoder.geocode({ address: location }, (results, status) => {
            if (status === 'OK') {
              setMapCenter(results[0].geometry.location.toJSON());
            } 

            else {
              alert('Geocode was not successful: ' + status);
            }
          });
        }
    }, [location]);
    /*AIzaSyDnIrd8-dw2tRW9y8YB03_yIkLNM4YWO9Q*/

    return (
        <LoadScript googleMapsApiKey="" >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}>
            </GoogleMap>
            

        </LoadScript>
    )
}

export default Map;
