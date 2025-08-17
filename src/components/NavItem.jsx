import { Link } from "react-router-dom";

export default function NavItem({ text, path, disabled }) {
  return (
    <li className="text-special text-2xl tracking-wide font-semibold">
      <Link
        to={path}
        className={`${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
      >
        {text}
      </Link>
    </li>
  );
}
