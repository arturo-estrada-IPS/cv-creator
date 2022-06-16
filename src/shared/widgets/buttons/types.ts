import { MouseEvent } from "react";

type Color = "primary" | "secondary" | "success" | "danger" | "warn";
type ButtonSize = "x-small" | "small" | "medium" | "large";
type ButtonType = "button" | "submit" | "reset";
type Children = JSX.Element | JSX.Element[] | string;

export interface ButtonProps {
  color?: Color;
  size?: ButtonSize;
  type?: ButtonType;
  children: Children;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

export interface ButtonLinkProps {
  color?: Color;
  children: Children;
  isExternal?: boolean;
  pathname: string;
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
}
