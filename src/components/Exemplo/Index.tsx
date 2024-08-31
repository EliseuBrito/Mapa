import axios from "axios";
import "leaflet/dist/leaflet.css";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Bounce, ToastContainer, toast } from "react-toastify";

export default function Exemplo(): JSX.Element {
  const [locais, setLocais] = useState([]);
  const MINUTOS_MS = 15000;
  useEffect(() => {
    axios
      .get("http://localhost:3000/gps")
      .then((response) => {
        setLocais(response.data);
        toast.success("API ONLINE", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
        });
      })
      .catch((error) => {
        console.log(error);
        toast.error("API OFFLINE", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
        });
      });
  }, [MINUTOS_MS]);

  const LMcp = [0.0344566, -51.0666];
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />
      <MapContainer
        className="map-container"
        center={[LMcp[0], LMcp[1]]}
        zoom={12}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {locais &&
          locais.map((marcador: { id: string; Loc: number[]; Inf: string }) => (
            <Marker
              key={marcador.id}
              position={[marcador.Loc[0], marcador.Loc[1]]}
            >
              <Popup>
                <h2>INFO:{marcador.Inf}</h2>
                <p>
                  Localização: {marcador.Loc[0]} ,{marcador.Loc[1]}
                </p>
              </Popup>
            </Marker>
          ))}
      </MapContainer>
    </>
  );
}
