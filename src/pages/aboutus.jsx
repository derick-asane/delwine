import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MyCarousel from "../components/myCarousel";

const AboutUs = () => {
  return (
    <div className="md:flex md:h-[800px] w-full">
      <div className="h-[350px] w-full md:w-[50%] md:h-[600px]">
        <MapContainer
          center={[3.8210699716886722, 11.472088012740802]}
          zoom={13}
          scrollWheelZoom={true}
          className=" z-0"
          style={{ height: "100%", minHeight: "100%" }}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={[3.8210699716886722, 11.472088012740802]}>
            <Popup>Wine shop Delwine</Popup>
          </Marker>
        </MapContainer>
      </div>
      <div className="md:w-[50%] md:flex md:justify-center mt-2 md:mt-0 md:items-start ">
        <MyCarousel />
      </div>
    </div>
  );
};

export default AboutUs;
