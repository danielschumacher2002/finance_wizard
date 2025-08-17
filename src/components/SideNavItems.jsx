import { Link } from "react-router"

export default function SideNavItems({index, to, disabled, label}){
  return(
    <Link key={index} to={to} className={`text-4xl text-special ${disabled ? "opacity-50" : ""}`}>
        {label}
    </Link>
  )
}