export default function Footer({ children }) {
  return (
    <footer className="h-10 bg-secondary border-t-2 border-white/10  flex flex-col items-center fixed bottom-0 left-0 right-0 md:h-15 md:gap-1">
      {children}
    </footer>
  );
}
