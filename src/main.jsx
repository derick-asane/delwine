import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import router from "./features/routes.jsx";
import { RouterProvider } from "react-router-dom";
import { store } from "./app/store.js";
import { Provider } from "react-redux";
import { IndicateTabProvider } from "./context/indicateTabContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <IndicateTabProvider>
        <RouterProvider router={router}>
          <App />
        </RouterProvider>
      </IndicateTabProvider>
    </Provider>
  </React.StrictMode>
);
