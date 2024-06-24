import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import { useState } from "react";

const Auth: React.FC = () => {
  const [isSignIn, setIsSignIn] = useState<boolean>(true);

  const switchToSignUp = () => {
    setIsSignIn(false);
  };
  const switchToSignIn = () => {
    setIsSignIn(true);
  };

  return (
    <div className="flex">
      <div className="w-2/3 border-r-2 bg-hero-image"></div>
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
