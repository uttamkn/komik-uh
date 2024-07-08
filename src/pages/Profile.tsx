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
    <div className="bg-secondary h-screen font-roboto">
      <Navbar isProfile={true} />
      <div className="relative min-h-96 bg-hero-image bg-center shadow-white-bottom"></div>
      <div className="absolute top-36 left-1/3 flex justify-center items-center backdrop-blur-md shadow-md rounded-lg p-7">
        <div className=" flex flex-col items-center gap-4 z-10">
          <Gravatar
            email={user?.email || ""}
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
