export default function Header({ children }) {
  return (
    <header className="z-10 h-10 bg-secondary border-b-2 border-white/10 flex justify-between items-center px-3 fixed top-0 left-0 right-0 bottom-10 md:px-20 md:h-15">
      {children}
    </header>
  );
}
