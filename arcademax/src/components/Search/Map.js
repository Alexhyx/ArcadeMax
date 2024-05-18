import React from 'react';
import { GoogleMap, LoadScript}  from '@react-google-maps/api';
import { useState } from 'react';


const containerStyle = {
  width: '400px',
  height: '400px'
};

const defaultCenter = {
  lat: -34.397,
  lng: 150.644
};

function Map() {
    
    const [center, setMapCenter] = useState(defaultCenter);
    const [location, setlocation] = useState('');

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
      };


    return (
        <LoadScript googleMapsApiKey="AIzaSyDnIrd8-dw2tRW9y8YB03_yIkLNM4YWO9Q" >

    
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}>
            </GoogleMap>
            

            <div>
                <input type="text" value={location} onChange={changeLocation} />
                <button onClick={locationFinder}>Find Location</button>
            </div>
        </LoadScript>
    )
}

export default Map;
