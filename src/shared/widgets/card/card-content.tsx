import { CardContentProps } from "./types";

export function CardContent({ children }: CardContentProps) {
  return (
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
      {children}
    </p>
  );
}
