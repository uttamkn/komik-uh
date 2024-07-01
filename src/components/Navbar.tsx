import Input from "./ui/Input";

const Navbar: React.FC = () => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Search functionality
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };

  return (
    <div className="relative min-h-96 bg-hero-image bg-center">
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
          <button className="bg-gray-800 py-2 px-4 rounded-lg opacity-85">
            Profile
          </button>
          <button
            className="bg-gray-800 py-2 px-4 rounded-lg opacity-85"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
