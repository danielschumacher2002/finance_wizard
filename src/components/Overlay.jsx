export default function Overlay({ isActive, toggleFunc }) {
  return (
    <div
      onClick={toggleFunc}
      className={`fixed inset-0 bg-black
                transition-opacity duration-300 ease-in-out
             ${isActive ? "opacity-50 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
    ></div>
  );
}
