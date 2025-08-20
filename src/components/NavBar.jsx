// Links als Children
export default function NavBar({ children }) {
  return (
    <nav className="">
      <ul className="flex flex-row gap-9">{children}</ul>
    </nav>
  );
}
