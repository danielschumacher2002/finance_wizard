export default function NavBar({ children }) {
  return (
    <nav className="hidden md:block">
      <ul className="flex flex-row gap-x-7">{children}</ul>
    </nav>
  );
}
