type InputProps = {
  label?: string;
  type: string;
  value?: string;
  name?: string;
  placeholder?: string;
  pattern?: string;
  required?: boolean | false;
  search?: boolean | false;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input: React.FC<InputProps> = ({ label, search = false, ...props }) => {
  // If the search prop is true, render a search input
  if (search) {
    return (
      <div>
        <input
          className="bg-opacity-50 bg-secondary text-gray-700 placeholder:text-gray-500 border-none block px-3 py-2 rounded w-full mt-1 focus:outline-none focus:bg-opacity-80 placeholder:font-roboto transition duration-300 ease-in-out hover:bg-opacity-70"
          {...props}
        />
      </div>
    );
  }

  return (
    <div>
      <label>{label}</label>
      <input
        className="block p-2 rounded w-full mt-1 border border-black focus:outline-none focus:border-2 font-roboto placeholder:font-roboto"
        {...props}
      />
    </div>
  );
};

export default Input;
