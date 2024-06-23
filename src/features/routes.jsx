import { Route, createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/home";
import Products from "../pages/products";
import AboutUs from "../pages/aboutus/aboutus";
import Layout from "../layout/layout";
import ErrorPage from "./error-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "products", element: <Products /> },
      { path: "about-us", element: <AboutUs /> },
    ],
  },
]);

export default router;
