import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import { useState, useEffect } from "react";
import { useAuth } from "../context/UserContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Auth: React.FC = () => {
  const { user, loading } = useAuth();
  const [isSignIn, setIsSignIn] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      toast.loading("Loading...");
    } else {
      toast.dismiss();
      if (user) {
        navigate("/");
      }
    }
  }, [loading, user]);

  const switchToSignUp = () => {
    setIsSignIn(false);
  };
  const switchToSignIn = () => {
    setIsSignIn(true);
  };

  return (
    <div className="flex">
      <div className="relative w-2/3 border-r-2 bg-hero-image">
        <div className="absolute backdrop-blur-sm top-12 left-12 font-heading text-7xl font-extrabold">
          KOMIK-UH
        </div>
      </div>
      <div className="flex justify-center items-center h-screen w-1/3">
        {isSignIn ? (
          <SignIn switchToSignUp={switchToSignUp} />
        ) : (
          <SignUp switchToSignIn={switchToSignIn} />
        )}
      </div>
    </div>
  );
};

export default Auth;
