import React, { useState } from 'react'

import { useGeolocated } from "react-geolocated";

import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';


function Loction() {
     

    const { coords, isGeolocationAvailable, isGeolocationEnabled } =

        useGeolocated(

            {
                positionOptions: {
                    enableHighAccuracy: true,
                    maximumAge: 0,
                    timeout: Infinity,
                },
                watchPosition: false,
                userDecisionTimeout: null,
                suppressLocationOnMount: false,
           //     geolocationProvider: navigator.geolocation,
                isOptimisticGeolocationEnabled: true,
              
            }
        );
       
        // setlatitude(coords?.latitude)
                  
        // setlogitude(coords?.longitude)

        const { isLoaded } = useJsApiLoader({

            id: 'google-map-script',
            googleMapsApiKey: "AIzaSyDavmxkcoYuFPsUm8HjWl0ub55fZXOlJJs"

          })
        
          const [map, setMap] = React.useState(null)
        
          const onLoad = React.useCallback(function callback(map) {

            // This is just an example of getting and using the map instance!!! don't just blindly copy!
            const bounds = new window.google.maps.LatLngBounds(center);
            map.fitBounds(bounds);
            setMap(map)

          }, [])

          const onUnmount = React.useCallback(function callback(map) {

            setMap(null)

          }, [])
          
        

          

const containerStyle = {
    width: '400px',
    height: '400px'
  };
  
  const center = {
    lat: 12.43,
    lng: 79.69
  };

  

      
    return (

        <div>

            {
                isLoaded && (
                    <GoogleMap
                      mapContainerStyle={containerStyle}
                      center={center}
                      zoom={10}
                      onLoad={onLoad}
                      onUnmount={onUnmount}
                    >
                      
                       location

                    </GoogleMap>)
            }


        </div>


    )
}

export default Loction