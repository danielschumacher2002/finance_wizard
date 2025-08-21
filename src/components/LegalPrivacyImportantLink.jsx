import { Link } from "react-router-dom";

export default function LegalPrivacyImportantLink({ to, text }) {
  return (
    <Link
      to={to}
      className="text-primary text-md font-[Inter] font-bold tracking-wide underline sm:text-lg"
    >
      {text}
    </Link>
  );
}
