import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/UserContext";
import toast from "react-hot-toast";
import Navbar from "../components/ui/Navbar.tsx";
import ComicsContainer from "../components/ComicsContainer";
import { fetchComics } from "../api/comic.ts";
import { Comic, User } from "../api/types.ts";

const Home: React.FC = () => {
  const { user, loading }: { user: User; loading: boolean } = useAuth();
  const [comics, setComics] = useState<Comic[]>([]);
  const [filteredComics, setFilteredComics] = useState<Comic[]>([]);
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

  useEffect(() => {
    if (!user) return;

    fetchComics()
      .then((data) => {
        setComics(data);
        setFilteredComics(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [user]);

  const filterComics = (searchQuery: string) => {
    if (searchQuery === "") {
      setFilteredComics(comics);
      return;
    }
    const filtered = comics.filter((comic) =>
      comic.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredComics(filtered);
  };

  return (
    <div className="flex flex-col">
      <Navbar filterComics={filterComics} />
      <div className="relative min-h-96 bg-hero-image bg-center shadow-white-bottom"></div>
      <ComicsContainer comics={filteredComics} />
    </div>
  );
};

export default Home;
