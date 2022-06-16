import { LinkPrimary } from "./link-components/link.primary";

interface LinkProps {
  type?: "primary" | "secondary";
  text: string;
}

export function ALink({ type = "primary", text }: LinkProps) {
  switch (type) {
    case "primary":
      return <LinkPrimary text={text} />;
    default:
      return <LinkPrimary text={text} />;
  }
}
