import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const MyLinks = [
    {
      id: 1,
      link: "/",
      name: "Home",
    },
    {
      id: 1,
      link: "products",
      name: "Products",
    },
    {
      id: 2,
      link: "service",
      name: "Service",
    },
    {
      id: 3,
      link: "contact",
      name: "Contact-Us",
    },
    {
      id: 4,
      link: "about-us",
      name: "About-Us",
    },
  ];
  return (
    <footer className="bg-gray-800 text-white py-8 w-full">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full sm:w-1/2 md:w-auto mb-4 sm:mb-0">
          <h2 className="text-xl font-bold mb-2">About Us</h2>
          <p className="text-sm">
            Our store is located at Yaounde VI , carrefour Simbock, opposite
            phamarcy simbock
          </p>
        </div>
        <div className="w-full sm:w-1/2 md:w-auto mb-4 sm:mb-0">
          <h2 className="text-xl font-bold mb-2">Links</h2>
          <ul className="text-sm">
            {MyLinks.map((mylink) => (
              <li key={mylink.id}>
                <Link
                  to={mylink.link}
                  className="text-gray-300 hover:text-white"
                >
                  {mylink.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full sm:w-1/2 md:w-auto">
          <h2 className="text-xl font-bold mb-2">Contact Us</h2>
          <p className="text-sm">
            Email: derickasane@gmail.com
            <br />
            Phone: 674-018-433
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
