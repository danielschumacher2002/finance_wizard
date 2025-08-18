import { Link } from "react-router-dom";
import SideNav from "./SideNav";
import CloseButton from "./CloseButton";
import { useEffect } from "react";
import SideNavItems from "./SideNavItems";

export default function SideMenu({ menuOpen, toggleMenu }) {
  const menuItems = [
    { to: "/finance_wizard", label: "Home" },
    { to: "/about", label: "About" },
    {
      to: "https://github.com/danielschumacher2002/finance_calculator",
      label: "Github",
    },
    { to: "/*", label: "Feedback", disabled: true },
    { to: "/notice", label: "Legal Notice" },
    { to: "/privacy", label: "Privacy Policy" },
  ];

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <div
      className={`fixed left-0 top-0 h-full w-full z-10 p-5 bg-secondary transform transition-transform duration-300 ease-out  ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
    >
      <CloseButton toggleMenu={toggleMenu} />
      <SideNav>
        {menuItems.map(({ to, label, disabled }, index) => (
          <SideNavItems key={index} to={to} label={label} disabled={disabled} />
        ))}
      </SideNav>
    </div>
  );
}
