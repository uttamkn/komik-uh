import { useAuth } from "../context/UserContext";
import { toast } from "react-hot-toast";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/ui/Navbar";
import Gravatar from "react-gravatar";
import { fetchComics } from "../api/comic";
import { getReadingProgress } from "../api/readingProgress";
import { Comic, ReadingProgress } from "../api/types";
import ReadingHistory from "../components/ReadingHistory";

const Profile: React.FC = () => {
  const { user, loading } = useAuth();
  const [comics, setComics] = useState<Comic[]>([]);
  const [readingProgress, setReadingProgress] = useState<ReadingProgress[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      toast.loading("Loading...");
    } else {
      toast.dismiss();
      if (!user) {
        navigate("/auth");
      } else {
        fetchComics().then((data) => {
          setComics(data);
        });

        getReadingProgress(user.id).then((data) => {
          setReadingProgress(data);
        });
      }
    }
  }, [loading, user]);

  return (
    <div className="bg-secondary min-h-screen font-roboto">
      <Navbar isProfile={true} />
      <div className="relative min-h-96 bg-hero-image bg-center shadow-white-bottom"></div>
      <div className="absolute top-36 left-1/2 transform -translate-x-1/2 flex justify-center items-center backdrop-blur-md shadow-md rounded-lg p-7 w-2/3">
        <div className="flex flex-col items-center gap-4 z-10 w-full">
          <Gravatar
            email={user?.email || ""}
            size={150}
            className="rounded-full"
          />
          <div className="grid gap-1 text-center">
            <div className="text-lg font-medium">{user?.username}</div>
            <div className="text-sm font-light">{user?.email}</div>
          </div>
          <div className="w-full mt-5">
            <hr />
            <h1 className="mt-5 text-2xl font-semibold">READING HISTORY</h1>
            <ReadingHistory comics={comics} readingProgress={readingProgress} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
