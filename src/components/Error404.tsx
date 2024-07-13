import React from "react";
import { Link } from "react-router-dom";

const Error404: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center bg-gray-100">
      <h1 className="text-9xl font-bold text-gray-800">404</h1>
      <h2 className="text-2xl font-medium text-gray-600 mt-2">
        Page Not Found
      </h2>
      <Link to="/" className="mt-4 px-4 py-2 text-white bg-primary rounded">
        Go to Home
      </Link>
    </div>
  );
};

export default Error404;
