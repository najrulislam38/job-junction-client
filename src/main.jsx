import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { Root } from "postcss";
import MainRouter from "./Routes/MainRouter.jsx";
import AuthProvider from "./Provider/AuthProvider.jsx";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={MainRouter}>
        <Root></Root>
        <Toaster />
      </RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
