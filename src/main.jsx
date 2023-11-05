import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { Root } from "postcss";
import MainRouter from "./Routes/MainRouter.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={MainRouter}>
      <Root></Root>
    </RouterProvider>
  </React.StrictMode>
);
