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
  ]);
  return (
    <UserContextProvider>
      <Toaster position="top-center" toastOptions={{ duration: 2000 }} />
      <RouterProvider router={router} />
    </UserContextProvider>
  );
};

export default App;
