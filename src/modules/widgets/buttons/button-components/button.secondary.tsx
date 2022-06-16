export function SecondaryButton({ text }: { text: string }) {
  return (
    <button
      className="bg-gray-400 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      type="button"
    >
      {text}
    </button>
  );
}
