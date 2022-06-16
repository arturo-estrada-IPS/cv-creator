import { TextAreaProps } from "./types";

export function Textarea({
  label,
  name,
  placeholder,
  value,
  onChange,
}: TextAreaProps) {
  return (
    <div className="mb-4">
      <label
        htmlFor={name}
        className="block text-gray-700 text-sm font-bold mb-2"
      >
        {label}
      </label>
      <textarea
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={onChange}
      ></textarea>
    </div>
  );
}
