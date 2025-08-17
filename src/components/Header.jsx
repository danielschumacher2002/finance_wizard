export default function Header({ children }) {
  return (
    <header className="h-20 bg-secondary border-b-2 border-white/10 flex justify-between items-center px-3 relative">
      {children}
    </header>
  );
}
