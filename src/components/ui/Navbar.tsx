import Input from "./Input";
import { useNavigate } from "react-router-dom";
import Gravatar from "react-gravatar";
import { useAuth } from "../../context/UserContext";

const Navbar: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleChange = () => {
    // Search functionality
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/auth");
  };

  const handleProfile = () => {
    navigate("/profile");
  };

  const handleHome = () => {
    navigate("/");
  };

  return (
    <nav className="z-10 flex fixed items-center w-full text-primary p-4 backdrop-blur-sm mt-1">
      <button
        className="font-heading font-extrabold text-4xl mr-auto"
        onClick={handleHome}
      >
        KOMIK-UH
      </button>
      <div className="min-w-48">
        <Input
          type="text"
          placeholder="Search"
          onChange={handleChange}
          search={true}
        />
      </div>
      <div className="flex ml-auto space-x-4 text-secondary font-roboto">
        <Gravatar
          email={user?.email || ""}
          size={40}
          className="rounded-full"
        />
        <button
          className="transform transition-transform duration-300 hover:-translate-y-2 hover:scale-110 active:scale-100"
          onClick={handleProfile}
        >
          Profile
        </button>
        <button
          className="transform transition-transform duration-300 hover:-translate-y-2 hover:scale-110 active:scale-100"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
