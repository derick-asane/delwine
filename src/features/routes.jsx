import { Route, createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Products from "../pages/products";
import AboutUs from "../pages/aboutus";
import Layout from "../layout/layout";
import ErrorPage from "./error-page";
import Service from "../pages/services";
import ContactUs from "../layout/contact-us";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "service", element: <Service /> },
      { path: "products", element: <Products /> },
      { path: "contact", element: <ContactUs /> },
      { path: "about-us", element: <AboutUs /> },
    ],
  },
]);

export default router;
