import { Link } from "react-router";

export default function MainTitle() {
  return (
    <Link
      to={"/finance_wizard"}
      className="text-special text-2xl font-[Inter] font-bold absolute left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 md:static"
    >
      Finance Wizard
    </Link>
  );
}
