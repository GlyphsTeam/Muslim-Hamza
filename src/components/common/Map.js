import React from 'react'
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';



  function Map({data , height}) {
    const containerStyle = {
      width: '100%',
      height: `${height}`
    };
    const center = {
  lat: parseFloat(process.env.REACT_APP_MAP_LAT),
  lng: parseFloat(process.env.REACT_APP_MAP_LNG)
};
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_MAP_KEY
    
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])




      const markers = data?.map((item) => (
        {name: item.name, position: { lat: (item?.locations_lat * 1), lng: (item?.locations_lng * 1) }, onClick: () => handleClick(item.locations_lat, item.locations_lng) }
      ));

  const handleClick = (lat, lng) => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
    window.open(url, '_blank');
  };

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={8}
        // onLoad={onLoad}
        // onUnmount={onUnmount}
      >
        <>
          {markers?.map(marker => (
            <Marker key={marker.name} onClick={marker.onClick} position={marker.position} label={{text: marker.name, color: 'white', fontWeight: 'bold', fontSize:'12px'}} />
          ))}
       
        </>
      </GoogleMap>
  ) : <></>
}

export default React.memo(Map)