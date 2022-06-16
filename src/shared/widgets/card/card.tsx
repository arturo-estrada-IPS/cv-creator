import { CardProps } from "./types";

export function Card({ children }: CardProps) {
  return (
    <div className="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      {children}
    </div>
  );
}
