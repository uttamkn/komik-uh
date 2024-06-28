import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
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
  return (
    <UserContextProvider>
      <Router>
        <Toaster position="top-center" toastOptions={{ duration: 2000 }} />
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </UserContextProvider>
  );
};

export default App;
