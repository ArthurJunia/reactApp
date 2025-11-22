import ReactDOM from "react-dom/client";
import { createBrowserRouter, redirect } from "react-router";
import { RouterProvider } from "react-router/dom";
import DogsPage from "./pages/Dogs";
import App from "./App";
import SignUpForm from "./components/SignUpForm";
import { getStorageValue } from "./hooks/useLocalStorage";
const protectRouteLoader = async () => {
  const storedUser = getStorageValue("user", { nom: "", prenom: "", age: 0 });
  console.log(storedUser);
  if (!storedUser || !storedUser.nom) {
    console.log("Redirection...");
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
    path: "/signup",
    element: <SignUpForm />,
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root as HTMLElement).render(
  <RouterProvider router={router} />
);
