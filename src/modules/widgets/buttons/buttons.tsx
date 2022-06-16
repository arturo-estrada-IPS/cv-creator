import { PrimaryButton } from "./button-components/button.primary";
import { SecondaryButton } from "./button-components/button.secondary";

interface ButtonProps {
  type: "primary" | "secondary";
  text: string;
}

export function Button({ type, text }: ButtonProps) {
  switch (type) {
    case "primary":
      return <PrimaryButton text={text} />;
    case "secondary":
      return <SecondaryButton text={text} />;
    default:
      return <PrimaryButton text={text} />;
  }
}
