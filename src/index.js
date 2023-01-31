import "./index.scss";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Index from "./pages/rootLayout/Index";
import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./pages/rootLayout/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [{ index: true, element: <Index /> }],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
