import { Link } from "react-router-dom";
import {
  colorFilledClases,
  colorOutlineClasses,
  commonClasses,
  linkClasses,
  sizeClasses,
} from "./button.utils";
import { ButtonLinkProps, ButtonProps } from "./types";

export function Button({
  color = "primary",
  type = "button",
  size = "medium",
  children,
  onClick = () => {},
  fill = "filled",
  disabled = false,
}: ButtonProps) {
  const buttonClasses = {
    filled: `${sizeClasses[size]} ${colorFilledClases[color]} ${commonClasses}`,
    outline: `${sizeClasses[size]} ${colorOutlineClasses[color]} ${commonClasses}`,
  };

  return (
    <button
      className={`${buttonClasses[fill]} disabled:opacity-50 disabled:cursor-not-allowed`}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export function ButtonLink({
  color = "primary",
  children,
  isExternal = false,
  pathname,
}: ButtonLinkProps) {
  const className = `inline-block align-baseline font-bold text-sm ${linkClasses[color]}`;

  return isExternal ? (
    <Link to={{ pathname }} target="_blank">
      {children}
    </Link>
  ) : (
    <Link to={pathname} className={className}>
      {children}
    </Link>
  );
}
