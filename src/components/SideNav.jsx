import { Link } from "react-router-dom"

export default function SideNav({children}){
    return(
    <nav className="mt-10 flex flex-col gap-15 pl-5">
        {children}
    </nav>
    )
}