/* eslint-disable jsx-a11y/anchor-is-valid */
export function LinkPrimary({ text }: { text: string }) {
  return (
    <a
      className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
      href="#"
    >
      {text}
    </a>
  );
}
