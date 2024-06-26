import { Navigate } from "react-router-dom";
import { useAuth } from "../context/UserContext";
import toast from "react-hot-toast";

const ProtectedRoute = ({ component: Component, ...rest }: any) => {
  const { user, loading }: { user: any; loading: boolean } = useAuth();

  if (loading) {
    toast.loading("Loading...");
  }

  return user ? <Component {...rest} /> : <Navigate to="/" />;
};

export default ProtectedRoute;
