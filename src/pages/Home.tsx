import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/UserContext";
import toast from "react-hot-toast";
import Navbar from "../components/Navbar";
import ComicsContainer from "../components/ComicsContainer";
import axios from "axios";
import { parseToken } from "../api/utils";
import { Comic } from "../types.ts";

const Home: React.FC = () => {
  const { user, loading }: { user: any; loading: boolean } = useAuth();
  const [comics, setComics] = useState<Comic[]>([]);
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

  useEffect(() => {
    if (!user) return;
    let token = parseToken(localStorage.getItem("user") || "");

    const fetchComics = axios.get("/comics", {
      headers: {
        Authorization: `Bearer ${token?.access_token}`,
      },
    });

    fetchComics
      .then((res) => {
        console.log(res.data);
        setComics(res.data);
      })
      .catch((err) => {
        console.log("Error fetching comics:");
        console.log(err);
      });
  }, [user]);

  return (
    <div style={{ minHeight: "150vh" }} className="flex flex-col">
      <Navbar />
      <ComicsContainer comics={comics} />
    </div>
  );
};

export default Home;
