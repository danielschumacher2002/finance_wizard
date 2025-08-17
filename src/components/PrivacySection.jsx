export default function PrivacySection({ children, title }) {
  return (
    <section className="flex flex-col gap-2 text-gray-300">
      <h2 className="text-xl font-semibold text-white">{title}</h2>
      {children}
    </section>
  );
}
