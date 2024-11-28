import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/css/index.scss";
import "@mantine/carousel/styles.css";
import "@mantine/core/styles.layer.css";
import Cursor from "components/common/Cursor";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Cursor />
    <App />
  </React.StrictMode>
);
