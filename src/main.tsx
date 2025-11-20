import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import DogsPage from "./pages/dogs"
import App from "./App";
import SignUpForm from "./components/SignUpForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/dogs",
    element: <DogsPage/>,
  },
  {
    path: "/signup",
    element: <SignUpForm/>,
  },
  

]);

const root = document.getElementById("root");

ReactDOM.createRoot(root as HTMLElement).render(
  <RouterProvider router={router} />,
);
