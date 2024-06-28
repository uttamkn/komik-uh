import Input from "./ui/Input";

const Navbar: React.FC = () => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Search functionality
  };

  return (
    // TODO: Create an image carousel for the background
    <div className="relative min-h-80 bg-hero-image bg-center">
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
          <button className="bg-gray-800 py-2 px-4 rounded-lg opacity-85">
            Logout
          </button>
        </div>
      </nav>
      <div className="absolute w-full h-full flex justify-center items-center">
        //carousel
      </div>
    </div>
  );
};

export default Navbar;
