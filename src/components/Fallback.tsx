import React from "react";
import Loader from "./ui/Loader";

const Fallback: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen text-center bg-gray-100">
      <div className="flex items-center">
        <Loader />
        <p className="ml-4 text-gray-800">Loading...</p>
      </div>
    </div>
  );
};

export default Fallback;
