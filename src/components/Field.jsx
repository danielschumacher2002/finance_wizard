export default function Field({ label, children }) {
  return (
    <label className="grid gap-2">
      <div className="flex items-center gap-2">
        <span className="text-primary/90 text-sm font-medium">{label}</span>
      </div>
      {children}
    </label>
  );
}
