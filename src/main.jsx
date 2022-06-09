import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.scss";

const AppGlobal = () => {
  return (
    <>
      <App />
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppGlobal />
  </React.StrictMode>,
);
