import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { IndicateContext } from "../context/indicateTabContent";

const Navbar = () => {
  const [burger, setBurger] = useState(false);
  const { indicate, setIndicate } = useContext(IndicateContext);
  console.log(indicate);

  let LinkElement = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "Services", link: "service" },
    { id: 3, name: "Product", link: "products" },
    { id: 4, name: "Contact-us", link: "contact" },
    { id: 5, name: "About-us", link: "about-us" },
  ];
  return (
    <div className="bg-gray-200 md:h-[50px] pl-2 fixed w-full z-10 top-0 left-0 flex flex-col md:flex-row md:pl-0  md:justify-between md:items-center shadow-2xl">
      <div className="w-[10%] my-3  flex justify-center items-center">
        <img src="" alt="Logo" />
      </div>

      <div
        className={`w-[60%]  md:flex justify-evenly text-lg ${
          burger ? "block" : "hidden"
        }`}
      >
        <ul
          className={`w-full flex flex-col justify-center  md:flex md:flex-row md:items-center md:justify-between `}
        >
          {LinkElement.map((element) => (
            <li
              key={element.id}
              className={`border-2 ${
                indicate === element.id ? "md:border-b-[#4D4DFF]" : ""
              } transform md:hover:scale-125 `}
            >
              <Link to={element.link} onClick={() => setIndicate(element.id)}>
                {element.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="w-[40%] md:w-[20%]  flex  gap-4 absolute md:relative top-4 right-8  md:top-0 md:right-0  md:gap-0 md:justify-evenly">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
          />
        </svg>
        {!burger ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            onClick={() => {
              setBurger(!burger);
            }}
            className="w-9 h-9 md:hidden"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            onClick={() => {
              setBurger(!burger);
            }}
            className="w-9 h-9 md:hidden"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        )}
        <div className="w-[10%] flex justify-start">
          <button className="h-8 px-4 text-sm leading-none">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
