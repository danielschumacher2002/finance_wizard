export default function LegalPrivacyList({ items }) {
  return (
    <ul className={`list-disc text-white/90 pl-4`}>
      {items.map((item, index) => (
        <li
          key={index}
          className="text-white/60 text-md font-[Inter] font-bold tracking-wide leading-relaxed sm:text-lg"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
