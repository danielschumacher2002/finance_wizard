import { Link } from "react-router";

export default function FooterLinkItems({ text }) {
  return (
    <Link className="text-special text-lg font-bold underline">{text}</Link>
  );
}
