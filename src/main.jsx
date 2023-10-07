import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Routs from "./Routs/Routs";
import Provider from "./Provider/Provider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider>
      <RouterProvider router={Routs} />
    </Provider>
  </React.StrictMode>
);
