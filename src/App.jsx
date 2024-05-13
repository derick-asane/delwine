import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./index.css";
import Layout from "./layout/layout";
import { IndicateTabContext } from "./context/indicateTabContent";

function App() {
  return (
    <>
      <Layout />
    </>
  );
}

export default App;
