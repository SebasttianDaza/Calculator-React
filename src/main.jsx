import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.scss";

const calculator = {
  firstPart: [
    {
      content: "ac",
      classUnique: "ac",
      classId: 3,
    },
    {
      content: "/",
      classUnique: "divider",
      classId: 2,
    },
    {
      content: "x",
      classUnique: "multiplicator",
      classId: 2,
    },
    {
      content: 7,
      classUnique: "",
      classId: 1,
    },
    {
      content: 8,
      classUnique: "",
      classId: 1,
    },
    {
      content: 9,
      classUnique: "",
      classId: 1,
    },
    {
      content: "-",
      classUnique: "",
      classId: 2,
    },
    {
      content: 4,
      classUnique: "",
      classId: 1,
    },
    {
      content: 5,
      classUnique: "",
      classId: 1,
    },
    {
      content: 6,
      classUnique: "",
      classId: 1,
    },
    {
      content: "+",
      classUnique: "",
      classId: 2,
    },
  ],
  secondPart: [
    {
      content: 1,
      classUnique: "one",
      classId: 1,
    },
    {
      content: 2,
      classUnique: "two",
      classId: 1,
    },
    {
      content: 3,
      classUnique: "three",
      classId: 1,
    },
    {
      content: "=",
      classUnique: "same",
      classId: 4,
    },
    {
      content: 0,
      classUnique: "zero",
      classId: 1,
    },
    {
      content: ".",
      classUnique: "number",
      classId: 1,
    },
  ],
};

const AppGlobal = () => {
  return (
    <>
      <App data={calculator} />
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppGlobal />
  </React.StrictMode>,
);
