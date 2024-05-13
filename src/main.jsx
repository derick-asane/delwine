import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import router from "./features/routes.jsx";
import { RouterProvider } from "react-router-dom";
import { store } from "./app/store.js";
import { Provider } from "react-redux";
import { IndicateTabProvider } from "./context/indicateTabContext.jsx";
import { UserProvider } from "./context/userContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <UserProvider>
        <IndicateTabProvider>
          <RouterProvider router={router}>
            <App />
          </RouterProvider>
        </IndicateTabProvider>
      </UserProvider>
    </Provider>
  </React.StrictMode>
);
