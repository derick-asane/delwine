import { menu } from "../../images";
import "./services.css";
import { MdOutlineDragIndicator } from "react-icons/md";

const Service = () => {
  const OurServices = [
    {
      id: 1,
      service: "Delivery and Shipping",
      state: "Paid",
    },
    {
      id: 2,
      service: "Wine Club Events",
      state: "free",
    },
    {
      id: 3,
      service: "Education Workshops",
      state: "free",
    },
    {
      id: 4,
      service: "Pairing Recommendations",
      state: "free",
    },
    {
      id: 5,
      service: "Wine Tastings",
      state: "free",
    },
  ];

  return (
    <div className="app__service p__container">
      <div className="app__service-ourservice">
        <div className="app__service-heading">
          <h1>Our Services</h1>
        </div>
        <div>
          {OurServices.map((service, index) => (
            <div key={index} className="app__service-item">
              <div>
                <MdOutlineDragIndicator />
                <span>{service.service}</span>
              </div>
              <p>{service.state}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="app__service-img">
        <img src={menu} alt="menu" />
      </div>
    </div>
  );
};

export default Service;
