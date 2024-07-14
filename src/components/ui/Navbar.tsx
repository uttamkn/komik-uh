import Input from "./Input";
import { useNavigate } from "react-router-dom";
import Gravatar from "react-gravatar";
import { useAuth } from "../../context/UserContext";

type navProps = {
  isProfile?: boolean | false;
  filterComics?: (searchQuery: string) => void;
};

const Navbar: React.FC<navProps> = ({ isProfile, filterComics }) => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    filterComics && filterComics(e.target.value);
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
      {!isProfile && (
        <div className="flex min-w-48 gap-5">
          <Input
            type="text"
            placeholder="Search"
            onChange={handleChange}
            search={true}
          />
        </div>
      )}
      <div className="flex ml-auto space-x-4 text-gray-300 font-roboto">
        <Gravatar
          email={user?.email || ""}
          size={40}
          className="rounded-full"
        />
        <button
          className="transform transition-transform duration-300 hover:-translate-y-1 hover:scale-105 active:scale-100"
          onClick={handleProfile}
        >
          Profile
        </button>
        <button
          className="transform transition-transform duration-300 hover:-translate-y-1 hover:scale-105 active:scale-100"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
