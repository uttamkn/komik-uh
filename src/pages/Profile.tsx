import { useAuth } from "../context/UserContext";
import { toast } from "react-hot-toast";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/ui/Navbar";
import Gravatar from "react-gravatar";

const Profile: React.FC = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      toast.loading("Loading...");
    } else {
      toast.dismiss();
      if (!user) {
        navigate("/auth");
      }
    }
  }, [loading, user]);

  return (
    <div className="bg-gray-300 h-screen font-roboto">
      <Navbar />
      <div className="flex justify-center items-center h-full">
        <div className=" flex flex-col items-center gap-4 p-5 rounded-lg shadow-md">
          <Gravatar
            email="uttamkn15@gmail.com"
            size={400}
            className="rounded-full"
          />
          <div className="grid gap-1 text-center">
            <div className="text-lg font-medium">{user?.username}</div>
            <div className="text-sm font-light">{user?.email}</div>
          </div>
          <div>
            <hr />
            <h1 className="mt-5">READING HISTORY</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
