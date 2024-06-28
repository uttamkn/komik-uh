import { ChangeEvent, useState } from "react";
import Input from "./ui/Input";
import { toast } from "react-hot-toast";
import axios from "axios";

type FormData = {
  username: string;
  password: string;
  confirm_password: string;
};

type SignUpProps = {
  switchToSignIn: () => void;
};

const SignUp: React.FC<SignUpProps> = ({ switchToSignIn }) => {
  const [formData, setFormData] = useState<FormData>({
    username: "",
    password: "",
    confirm_password: "",
  });
  const [error, setError] = useState<string>("");

  const handleChange = ({
    target: { name, value },
  }: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (formData.password !== formData.confirm_password) {
      setError("Passwords do not match");
      return;
    } else {
      setError("");
    }

    try {
      const response = await axios.post("/sign_up", formData);
      console.log(response);

      // Success
      setFormData({ username: "", password: "", confirm_password: "" });
      toast.success("User created successfully");
      switchToSignIn();
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        console.error(
          "Request failed with status code:",
          error.response.status
        );
        setError("User already exists, try a different username");
      } else {
        setError("An unexpected error occurred");
      }
    }
  };

  return (
    <div className="w-96 flex flex-col pl-10 pt-10 pr-10 pb-3 justify-center bg-secondary gap-5 rounded-md border border-primary shadow-md text-primary">
      <h1 className="font-heading font-bold text-4xl mb-2 text-primary cursor-default">
        {" "}
        REGISTER NOW{" "}
      </h1>

      <form className="flex flex-col gap-5 w-full" onSubmit={handleSubmit}>
        <Input
          label="Username"
          type="text"
          name="username"
          placeholder="Elon"
          value={formData.username}
          onChange={handleChange}
          required={true}
        ></Input>

        <Input
          label="Password"
          type="password"
          name="password"
          placeholder="Must be at least 8 characters long"
          value={formData.password}
          onChange={handleChange}
          required={true}
        ></Input>

        <Input
          label="Confirm Password"
          type="password"
          name="confirm_password"
          placeholder="Must match the password"
          value={formData.confirm_password}
          onChange={handleChange}
          required={true}
        ></Input>

        {error && <div className="text-center text-red-600">*{error}*</div>}
        <div className="w-100 text-center text-sm italic font-light text-primary cursor-default">
          Welcome to the world of fantasy
        </div>
        <button
          className="text-secondary w-full bg-primary rounded p-2 shadow-lg active:shadow-none"
          type="submit"
        >
          Sign Up
        </button>
      </form>
      <div className="w-full">
        Already have an account?{" "}
        <button className="font-semibold" onClick={switchToSignIn}>
          Sign in
        </button>
      </div>
    </div>
  );
};
export default SignUp;
