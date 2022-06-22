import { Color } from "../../core";

type AlertTypes = Color;

export interface AlertProps {
  children: JSX.Element | string;
  color?: AlertTypes;
  onDismiss?: () => void;
}
