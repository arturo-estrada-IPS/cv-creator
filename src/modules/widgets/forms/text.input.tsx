interface InputProps {
  label: string;
  type?: "text" | "password";
  name: string;
}

export function InputText({ label, type = "text", name }: InputProps) {
  return (
    <div className="mb-4">
      <label
        htmlFor={name}
        className="block text-gray-700 text-sm font-bold mb-2"
      >
        {label}
      </label>
      <input
        name={name}
        type={type}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      ></input>
    </div>
  );
}
