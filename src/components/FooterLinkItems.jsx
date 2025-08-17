import { Link } from "react-router";

export default function FooterLinkItems({ text, path }) {
  return (
    <Link
      to={path}
      className="text-special text-lg font-bold underline md:text-2xl"
    >
      {text}
    </Link>
  );
}
