import React from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "300px",
  height: "300px",
};

function Maps({ lat, lng, apiKey }) {
  const center = {
    lat,
    lng,
  };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: apiKey,
  });

  return (
    <>
      {isLoaded && (
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
          <Marker
            key="marker_1"
            position={{
              lat,
              lng,
            }}
          />
        </GoogleMap>
      )}
    </>
  );
}

export default React.memo(Maps);
