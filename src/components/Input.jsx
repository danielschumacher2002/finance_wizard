export default function Input(props) {
  return (
    <input
      className="rounded-lg bg-third/80 text-white/90 placeholder-white/30 border border-white/10 focus:outline-none focus:ring-2 focus:ring-primary/60 w-full pl-5 py-2.5"
      inputMode="decimal"
      {...props}
    />
  );
}
