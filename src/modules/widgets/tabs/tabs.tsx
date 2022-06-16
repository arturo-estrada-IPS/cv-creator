import { NavLink } from "react-router-dom";
import { TabsProps } from "./types";

export function Tabs({ items }: TabsProps) {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "inline-block p-4 text-blue-600 rounded-t-lg border-b-2 border-blue-600 active dark:text-blue-500 dark:border-blue-500"
      : "inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300";

  return (
    <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
      <ul className="flex flex-wrap w-72">
        {items.map(({ text, href }, i) => (
          <li className="mr-2" key={i}>
            <NavLink to={href} className={linkClass}>
              {text}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

//text-blue-600
