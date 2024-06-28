import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/UserContext";
import toast from "react-hot-toast";
import Navbar from "../components/Navbar";

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
    <div style={{ minHeight: "200vh" }} className="flex flex-col">
      <Navbar />
    </div>
  );
};

export default Home;
