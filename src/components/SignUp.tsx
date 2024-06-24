import { ChangeEvent, useState } from "react";
import Input from "./ui/Input";

type FormData = {
  username: string;
  email: string;
  password: string;
  confirmPass: string;
};

type SignUpProps = {
  switchToSignIn: () => void;
};

const SignUp: React.FC<SignUpProps> = ({ switchToSignIn }) => {
  const [formData, setFormData] = useState<FormData>({
    username: "",
    email: "",
    password: "",
    confirmPass: "",
  });
  const [error, setError] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (formData.password !== formData.confirmPass) {
      setError("Passwords do not match");
    } else {
      setError("");
    }

    try {
      const response = await fetch("url", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("User already exists");
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      setError((error as Error).message);
    }
  };

  return (
    <div className="w-96 flex flex-col pl-10 pt-10 pr-10 pb-3 justify-center items-center bg-secondary gap-5 rounded-md border border-primary shadow-md text-primary">
      <h1 className="font-heading text-4xl mb-2 text-primary cursor-default">
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
          label="Email"
          type="email"
          name="email"
          placeholder="musk@tesla.com"
          value={formData.email}
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
          name="confirmPass"
          placeholder="Must match the password"
          value={formData.confirmPass}
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
