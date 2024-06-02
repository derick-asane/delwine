import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 w-full">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full sm:w-1/2 md:w-auto mb-4 sm:mb-0">
          <h2 className="text-xl font-bold mb-2">About Us</h2>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
            turpis nec urna luctus consectetur.
          </p>
        </div>
        <div className="w-full sm:w-1/2 md:w-auto mb-4 sm:mb-0">
          <h2 className="text-xl font-bold mb-2">Links</h2>
          <ul className="text-sm">
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full sm:w-1/2 md:w-auto">
          <h2 className="text-xl font-bold mb-2">Contact Us</h2>
          <p className="text-sm">
            Email: example@example.com
            <br />
            Phone: 123-456-7890
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
