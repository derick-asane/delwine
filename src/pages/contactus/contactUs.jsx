import contact from "/src/assets/img/contact-us-animate.svg";
import { imagebg1, imagebg2 } from "../../images";
import { FiPhoneIncoming } from "react-icons/fi";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { ImLocation } from "react-icons/im";

import "./contactus.css";

const ContactUs = () => {
  return (
    <div
      className="p__container app__contactus"
      style={{
        backgroundImage: `url(${imagebg2})`,
      }}
    >
      <div className="app__contactus-address">
        <div className="app__contactus-address_item">
          <FiPhoneIncoming className="icon-address" />
          <span>674-064-433</span>
        </div>
        <div className="app__contactus-address_item">
          <MdOutlineMarkEmailRead className="icon-address" />
          <span>delwine@gmail.com</span>
        </div>
        <div className="app__contactus-address_item">
          <ImLocation className="icon-address" />
          <span>carrefour, Simbock</span>
        </div>
      </div>
      <div className="app__contactus-img">
        <img src={contact} alt="" />
      </div>
    </div>
  );
};

export default ContactUs;
