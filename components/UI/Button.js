// components/UI/Button.js
export default function Button({ children, href, ...props }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-medium py-2 px-4 rounded-md transition"
      {...props}
    >
      {children}
    </a>
  );
}
