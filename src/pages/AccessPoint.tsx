import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import { useState } from "react";

const AccessPoint: React.FC = () => {
  const [isSignIn, setIsSignIn] = useState<boolean>(true);

  const switchToSignUp = () => {
    setIsSignIn(false);
  };
  const switchToSignIn = () => {
    setIsSignIn(true);
  };

  return (
    <div>
      {isSignIn ? (
        <SignIn switchToSignUp={switchToSignUp} />
      ) : (
        <SignUp switchToSignIn={switchToSignIn} />
      )}
    </div>
  );
};

export default AccessPoint;
