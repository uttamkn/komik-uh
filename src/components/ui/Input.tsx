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
          className="block p-4 rounded w-full mt-1 border border-black focus:outline-none focus:border-2"
          {...props}
        />
      </div>
    );
  }

  return (
    <div>
      <label>{label}</label>
      <input
        className="block p-2 rounded w-full mt-1 border border-black focus:outline-none focus:border-2"
        {...props}
      />
    </div>
  );
};

export default Input;
