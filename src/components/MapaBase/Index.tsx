import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
export default function MapaBase(): JSX.Element {
  //Localização padrão do mapa em Macapá.
  const LMcp = [0.0344566, -51.0666];
  return (
    <MapContainer
      className="map-container"
      center={[LMcp[0], LMcp[1]]}
      zoom={12}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[0.040511, -51.05607]}>
        <Popup>Texto</Popup>
      </Marker>
    </MapContainer>
  );
}
