import ReactDOM from "react-dom/client";
import { createBrowserRouter, redirect } from "react-router";
import { RouterProvider } from "react-router/dom";
import App from "./App";
import SignUpForm from "./components/SignUpForm";
import { getStorageValue } from "./hooks/useLocalStorage";
import Fortnite from "./pages/Fortnite";
import DogsPage from "./pages/DogsPage";
const protectRouteLoader = async () => {
  const storedUser = getStorageValue("user", { nom: "", prenom: "", age: 0 });
  if (!storedUser || !storedUser.nom) {
    throw redirect("/signup");
  }

  return storedUser;
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/dogs",
    element: <DogsPage />,
    loader: protectRouteLoader,
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
