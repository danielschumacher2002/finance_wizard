import { Link } from "react-router";

export default function SideMenuLink({ text, to }) {
  return (
    <Link
      to={to}
      className="text-primary font-[Inter] font-bold text-xl sm:text-2xl"
    >
      {text}
    </Link>
  );
}
