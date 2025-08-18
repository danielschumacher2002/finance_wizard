import { Link } from "react-router";

export default function FooterLinkItems({ text, path }) {
  return (
    <Link
      to={path}
      className="text-special text-sm font-bold underline md:text-xl"
    >
      {text}
    </Link>
  );
}
