import { Route, Navigate } from "react-router-dom";
import { useAuth } from "../context/UserContext";
import toast from "react-hot-toast";

const ProtectedRoute = ({ component: Component, ...rest }: any) => {
  const { user, loading }: { user: any; loading: boolean } = useAuth();

  return (
    <Route
      {...rest}
      render={(props: any) =>
        loading ? (
          toast.loading("Waiting...")
        ) : user ? (
          <Component {...props} />
        ) : (
          <Navigate to="/" />
        )
      }
    />
  );
};

export default ProtectedRoute;
