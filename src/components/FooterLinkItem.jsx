import { Link } from "react-router-dom";

export default function FooterLinkItem({ text, to }) {
  return (
    <Link
      to={to}
      className="text-primary font-[Inter] font-semibold text-md sm:text-lg lg:text-xl"
    >
      {text}
    </Link>
  );
}
