import Input from "./Input";
import { useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  const handleChange = () => {
    // Search functionality
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/auth");
  };
  return (
    <nav className="z-10 flex fixed items-center w-full text-primary p-4 backdrop-blur-sm mt-1">
      <div className="font-heading font-extrabold text-4xl mr-auto">
        KOMIK-UH
      </div>
      <div className="min-w-48">
        <Input
          type="text"
          placeholder="Search"
          onChange={handleChange}
          search={true}
        />
      </div>
      <div className="flex ml-auto space-x-4 text-secondary font-roboto">
        <button className="transform transition-transform duration-300 hover:-translate-y-2 hover:scale-110 active:scale-100">
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
