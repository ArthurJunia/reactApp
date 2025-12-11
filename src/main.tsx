import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import App from "./App";
import SignUpForm from "./components/SignUpForm";
import Fortnite from "./pages/Fortnite";
import DogsPage from "./pages/DogsPage";
import { QueryClient } from "@tanstack/react-query";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

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

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
    },
  },
});

const root = document.getElementById("root");

ReactDOM.createRoot(root as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);
