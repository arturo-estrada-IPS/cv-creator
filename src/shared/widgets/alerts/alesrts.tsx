import {
  AlertButtonClass,
  AlertContainerClasses,
  AlertInfoSVG,
  AlertMessageClass,
} from "./alerts.utils";
import { AlertProps } from "./types";

export function Alert({
  color = "primary",
  children,
  onDismiss = () => {},
}: AlertProps) {
  return (
    <div
      id="alert-border-1"
      className={AlertContainerClasses[color]}
      role="alert"
    >
      <svg
        className={AlertInfoSVG[color]}
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
          clipRule="evenodd"
        ></path>
      </svg>
      <div className={AlertMessageClass[color]}>{children}</div>
      <button
        type="button"
        className={AlertButtonClass[color]}
        data-dismiss-target="#alert-border-1"
        aria-label="Close"
        onClick={onDismiss}
      >
        <span className="sr-only">Dismiss</span>
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
    </div>
  );
}
