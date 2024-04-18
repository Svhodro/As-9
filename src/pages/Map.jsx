import React from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
function Map() {
  return (
    <div className="lg:w-[500px] w-full h-[500px] overflow-hidden flex justify-center items-center">
      <div>
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />       
      </MapContainer>
      </div>
      
    </div>
  );
}

export default Map;
