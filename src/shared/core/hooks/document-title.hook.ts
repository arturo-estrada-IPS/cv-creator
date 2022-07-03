import { useEffect } from "react";

export const useDocumentTitle = (value: string): void => {
  useEffect(() => {
    document.title = value;
  });
};
