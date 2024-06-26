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
import ProtectedRoute from "./components/ProtectedRoute";

axios.defaults.baseURL = "url";
axios.defaults.withCredentials = true;

const App: React.FC = () => {
  return (
    <UserContextProvider>
      <Router>
        <Toaster position="top-center" toastOptions={{ duration: 2000 }} />
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route
            path="/home"
            element={<ProtectedRoute component={<Home />} />}
          />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </Router>
    </UserContextProvider>
  );
};

export default App;
