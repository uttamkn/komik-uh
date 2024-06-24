type InputProps = {
  label: string;
  type: string;
  value: string;
  name: string;
  placeholder?: string;
  pattern?: string;
  required?: boolean | false;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input: React.FC<InputProps> = ({ label, ...props }) => {
  return (
    <div>
      <label>{label}</label>
      <input
        className="block px-1.5 py-1 rounded w-full mt-1 border border-black focus:outline-none focus:border-2"
        {...props}
      />
    </div>
  );
};

export default Input;
