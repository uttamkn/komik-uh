//TODO: Add lazy loading for pages and error boundaries
import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import axios from "axios";
import { UserContextProvider } from "./context/UserContext";
import Comic from "./pages/Comic";
import Profile from "./pages/Profile";

axios.defaults.baseURL = import.meta.env.VITE_API_URL;
axios.defaults.withCredentials = true;

const App: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/auth",
      element: <Auth />,
    },
    {
      path: "*",
      element: <Navigate to="/" />,
    },
    {
      path: "/comic/:id",
      element: <Comic />,
    },
    {
      path: "/profile",
      element: <Profile />,
    },
  ]);
  return (
    <UserContextProvider>
      <Toaster position="top-center" toastOptions={{ duration: 2000 }} />
      <RouterProvider router={router} />
    </UserContextProvider>
  );
};

export default App;
