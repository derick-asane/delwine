import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const AboutUs = () => {
  return (
    <div className="sm:flex sm:h-[800px] ">
      <div className="h-[350px] sm:w-[50%] sm:h-[750px]">
        <MapContainer
          center={[3.8210699716886722, 11.472088012740802]}
          zoom={13}
          scrollWheelZoom={true}
          className=" z-0"
          style={{ height: "100%", minHeight: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[3.8210699716886722, 11.472088012740802]}>
            <Popup>
              Wine shop
              <br /> Delwine
            </Popup>
          </Marker>
        </MapContainer>
      </div>
      <div className="flex justify-center flex-col items-center p-8 sm:w-[50%] font-bold lg:text-[30px]">
        <span className="block">Cameroon, yaounde</span>
        <span>Carrefour simbock, opposite</span>
        <span>"Pharmacy simbock"</span>
      </div>
    </div>
  );
};

export default AboutUs;
