import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/UserContext";
import toast from "react-hot-toast";

const Home: React.FC = () => {
  const { user, loading }: { user: any; loading: boolean } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      toast.loading("Loading...");
    } else {
      toast.dismiss();
      if (!user) {
        navigate("/auth");
      } else {
        toast.success("Welcome back!");
      }
    }
  }, [loading, user, navigate]);

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
