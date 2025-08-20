import { Link } from "react-router-dom";

export default function Title() {
  return (
    <Link to={"/"} className="text-primary font-bold text-2xl font-[Inter]">
      Finance Wizard
    </Link>
  );
}
