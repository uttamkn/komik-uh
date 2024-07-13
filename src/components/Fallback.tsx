import React from "react";

const Fallback: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen text-center bg-gray-100">
      <div className="flex items-center">
        <div className="w-10 h-10 border-4 border-t-4 border-gray-200 rounded-full loader"></div>
        <p className="ml-4 text-gray-800">Loading...</p>
      </div>
    </div>
  );
};

export default Fallback;
