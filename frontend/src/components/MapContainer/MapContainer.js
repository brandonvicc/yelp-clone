import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "300px",
  height: "300px",
};

function MapContainer({ lat, lng }) {
  const center = {
    lat,
    lng,
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyCYdSTFifP_i3S1H2tRzmmdo21wswG7nZM">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
        {/* Child components, such as markers, info windows, etc. */}
        <Marker
          key="marker_1"
          position={{
            lat,
            lng,
          }}
        />
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(MapContainer);
