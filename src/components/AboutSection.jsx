export default function AboutSection({ title, children, id, className = "" }) {

  return (
    <section id={id} className={`bg-secondary rounded-md p-6 sm:p-10 flex flex-col gap-4 shadow-md ${className}`}>
      <h2 className="text-primary text-2xl sm:text-3xl font-[Inter] font-bold">
        {title}
      </h2>
      {children}
    </section>
  );
}
