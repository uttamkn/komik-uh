import { ChangeEvent, useState } from "react";
import "./styles/inputTag.css";

type FormData = {
  email: string;
  password: string;
};

type SignInProps = {
  switchToSignUp: () => void;
};

const SignIn: React.FC<SignInProps> = ({ switchToSignUp }) => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });
  const [error, setError] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // try {
    //   const response = await fetch("url", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(formData),
    //   });

    //   if (!response.ok) {
    //     throw new Error("Invalid credentials");
    //   }

    //   const data = await response.json();
    //   localStorage.setItem("token", data.token);
    //   window.location.href = "/home";
    //   console.log(data);
    // } catch (error) {
    //   setError((error as Error).message);
    // }
  };

  return (
    <div className="w-full flex flex-col pl-10 pt-10 pr-10 pb-3 justify-center items-center bg-secondary gap-5 rounded-md border border-primary shadow-md text-primary">
      <h1 className="font-heading text-4xl mb-2 underline text-primary cursor-default">
        {" "}
        Welcome Back{" "}
      </h1>

      <form className="flex flex-col gap-5 w-full" onSubmit={handleSubmit}>
        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            placeholder="musk@tesla.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>

        <label htmlFor="password">
          Password
          <input
            type="password"
            name="password"
            pattern=".{8,}"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </label>

        {error && <div className="text-center text-red-600">*{error}*</div>}
        <div className="w-100 text-center text-sm italic font-light text-primary cursor-default">
          Forgot password? Me too.
        </div>
        <button
          className="text-secondary w-full bg-primary rounded p-2 shadow-lg active:shadow-none"
          type="submit"
        >
          Sign Up
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
