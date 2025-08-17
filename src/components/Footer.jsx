export default function Footer({ children }) {
  return (
    <footer className="h-22 bg-secondary border-t-2 border-white/10 py-2 flex flex-col gap-4 items-center">
      {children}
    </footer>
  );
}
