import { Route, createBrowserRouter } from "react-router-dom";
// import Home from "../pages/home";
// import Products from "../pages/products";
// import AboutUs from "../pages/aboutus";
import Layout from "../layout/layout";
import ErrorPage from "./error-page";
// import Service from "../pages/services";
// import ContactUs from "../layout/contact-us";
import { Suspense, lazy } from "react";

const Home = lazy(() => import("../pages/home"));
const Products = lazy(() => import("../pages/products"));
const Service = lazy(() => import("../pages/services"));
const ContactUs = lazy(() => import("../layout/contact-us"));
const AboutUs = lazy(() => import("../pages/aboutus"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback="Loading ...">
            <Home />
          </Suspense>
        ),
      },
      {
        path: "service",
        element: (
          <Suspense fallback="Loading ...">
            <Service />
          </Suspense>
        ),
      },
      {
        path: "products",
        element: (
          <Suspense fallback="loading ...">
            <Products />
          </Suspense>
        ),
      },
      {
        path: "contact",
        element: (
          <Suspense fallback="loading ...">
            <ContactUs />
          </Suspense>
        ),
      },
      {
        path: "about-us",
        element: (
          <Suspense fallback="loading ...">
            <AboutUs />
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;
