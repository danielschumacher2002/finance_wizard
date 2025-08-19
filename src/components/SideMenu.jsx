import { Link } from "react-router-dom";
import SideNav from "./SideNav";
import CloseButton from "./CloseButton";
import { useEffect } from "react";
import SideNavItems from "./SideNavItems";

export default function SideMenu({ menuOpen, toggleMenu }) {
  const menuItems = [
    { to: "/finance_wizard/", label: "Home" },
    { to: "/finance_wizard/about", label: "About" },
    {
      to: "https://github.com/danielschumacher2002/finance_calculator",
      label: "Github",
    },
    { to: "/finance_wizard/*", label: "Feedback", disabled: true },
    { to: "/finance_wizard/notice", label: "Legal Notice" },
    { to: "/finance_wizard/privacy", label: "Privacy Policy" },
  ];

  // optional: Scroll dahinter sperren
  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", menuOpen);
    return () => document.body.classList.remove("overflow-hidden");
  }, [menuOpen]);

  return (
    <div
      onClick={toggleMenu}
      className={`fixed inset-0 z-20 bg-secondary/50 transition-opacity
    ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
    >
      <div
        className={`fixed left-0 top-0 h-full w-4/6 z-30 p-5 bg-secondary transform transition-transform duration-300 ease-out  ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
        onClick={(e) => e.stopPropagation()}
      >
        <CloseButton toggleMenu={toggleMenu} />
        <SideNav>
          {menuItems.map(({ to, label, disabled }, index) => (
            <SideNavItems
              key={index}
              to={to}
              label={label}
              disabled={disabled}
            />
          ))}
        </SideNav>
      </div>
    </div>
  );
}
