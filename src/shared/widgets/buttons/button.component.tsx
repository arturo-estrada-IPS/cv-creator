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
}: ButtonProps) {
  const buttonClasses = `${sizeClasses[size]} ${colorFilledClases[color]} ${commonClasses}`;

  return (
    <button className={buttonClasses} type={type}>
      {children}
    </button>
  );
}

export function ButtonOutline({
  color = "primary",
  type = "button",
  size = "medium",
  children,
}: ButtonProps) {
  const buttonClasses = `${sizeClasses[size]} ${colorOutlineClasses[color]} ${commonClasses}`;

  return (
    <button className={buttonClasses} type={type}>
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
