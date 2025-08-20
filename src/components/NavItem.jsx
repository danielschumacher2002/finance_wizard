import { Link } from "react-router-dom";
import { GrowingCenterUnderline } from "./GrowingCenterUnderline";

export default function NavItem({ text, to, disabled }) {
  return (
    <li
      className="text-primary text-2xl font-[Inter] font-semibold
                   relative group"
    >
      <Link
        to={to}
        className={`${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
      >
        {text}
      </Link>
      <GrowingCenterUnderline></GrowingCenterUnderline>
    </li>
  );
}
