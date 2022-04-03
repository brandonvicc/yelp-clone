import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "400px",
  height: "400px",
};

function MapContainer({ lat, lng }) {
  const center = {
    lat,
    lng,
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyCYdSTFifP_i3S1H2tRzmmdo21wswG7nZM">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        {/* Child components, such as markers, info windows, etc. */}
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(MapContainer);
