import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import App from "./App";
import SignUpForm from "./components/SignUpForm";
import Fortnite from "./pages/Fortnite";
import DogsPage from "./pages/DogsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/dogs",
    element: <DogsPage />,
  },
  {
    path: "/fortnite",
    element: <Fortnite />,
  },
  {
    path: "/signup",
    element: <SignUpForm />,
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root as HTMLElement).render(
  <RouterProvider router={router} />
);
