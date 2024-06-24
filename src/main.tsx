import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Auth from "./pages/Auth.tsx";
import Home from "./pages/Home.tsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
