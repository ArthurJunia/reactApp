import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import DogsPage from "./pages/dogs"
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/dogs",
    element: <DogsPage/>,
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root as HTMLElement).render(
  <RouterProvider router={router} />,
);
