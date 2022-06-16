import { ChangeEvent } from "react";

type InputTypes = "text" | "password" | "number" | "email";

export interface InputProps {
  label: string;
  type?: InputTypes;
  name: string;
  placeholder?: string;
  value?: string | number;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export interface TextAreaProps {
  label: string;
  name: string;
  placeholder: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}
