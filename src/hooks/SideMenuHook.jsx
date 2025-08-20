import { useState } from "react";

export default function useSideMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleSideMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return [menuOpen, toggleSideMenu];
}
