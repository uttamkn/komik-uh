import React, { Suspense, lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import axios from "axios";
import { UserContextProvider } from "./context/UserContext";
import Error404 from "./components/Error404";
import Fallback from "./components/Fallback";

axios.defaults.baseURL = import.meta.env.VITE_API_URL;
axios.defaults.withCredentials = true;

const Home = lazy(() => import("./pages/Home"));
const Auth = lazy(() => import("./pages/Auth"));
const Comic = lazy(() => import("./pages/Comic"));
const Profile = lazy(() => import("./pages/Profile"));

const App: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Suspense fallback={<Fallback />}>
          <Home />
        </Suspense>
      ),
    },
    {
      path: "/auth",
      element: (
        <Suspense fallback={<Fallback />}>
          <Auth />
        </Suspense>
      ),
    },
    {
      path: "/comic/:id",
      element: (
        <Suspense fallback={<Fallback />}>
          <Comic />
        </Suspense>
      ),
    },
    {
      path: "/profile",
      element: (
        <Suspense fallback={<Fallback />}>
          <Profile />
        </Suspense>
      ),
    },
    {
      path: "*",
      element: <Error404 />,
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
