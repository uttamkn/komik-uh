import { ChangeEvent, useState } from "react";
import Input from "./ui/Input";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/UserContext";
import axios from "axios";
import { UserSignIn } from "../types.ts";

type SignInProps = {
  switchToSignUp: () => void;
};

const SignIn: React.FC<SignInProps> = ({ switchToSignUp }) => {
  const navigate = useNavigate();
  const { updateUser } = useAuth();
  const [formData, setFormData] = useState<UserSignIn>({
    username: "",
    password: "",
  });
  const [error, setError] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      // Convert formData to URLSearchParams
      const formBody = new URLSearchParams(formData as Record<string, string>);

      const { data } = await axios.post("/auth/token", formBody.toString());
      setFormData({ username: "", password: "" });
      updateUser(data.user);
      localStorage.setItem("user", JSON.stringify(data));
      navigate("/");
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        console.error(
          "Request failed with status code:",
          error.response.status
        );
        setError("Invalid credentials");
      } else {
        setError("An unexpected error occurred");
      }
    }
  };

  return (
    <div className="w-96 flex flex-col pl-10 pt-10 pr-10 pb-3 justify-center  bg-secondary gap-5 rounded-md border border-primary text-primary shadow-md">
      <h1 className="font-heading2 font-bold text-4xl mb-2j text-primary cursor-default">
        {" "}
        Hello,<br></br>Welcome Back{" "}
      </h1>

      <form className="flex flex-col gap-5 w-full" onSubmit={handleSubmit}>
        <Input
          label="Username"
          value={formData.username}
          type="text"
          name="username"
          placeholder="musk"
          required={true}
          onChange={handleChange}
        ></Input>

        <Input
          label="Password"
          value={formData.password}
          type="password"
          name="password"
          placeholder="********"
          required={true}
          onChange={handleChange}
        ></Input>

        {error && <div className="text-center text-red-600">*{error}*</div>}
        <div className="w-100 text-center text-sm italic font-light text-primary cursor-default">
          Forgot password? Me too.
        </div>
        <button
          className="text-secondary w-full bg-primary rounded p-2 shadow-lg active:shadow-none"
          type="submit"
        >
          Sign in
        </button>
      </form>
      <div className="w-full">
        Don't have an account?{" "}
        <button className="font-semibold" onClick={switchToSignUp}>
          Sign up
        </button>
      </div>
    </div>
  );
};

export default SignIn;
