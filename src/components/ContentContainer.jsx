export default function ContentContainer({ title, path, children }) {
  return (
    <div
      className="bg-secondary rounded-sm
                    "
    >
      {/* Fuers editiieren zu flex box und stift svg einfuegen*/}
      <div
        className="bg-fourth shadow-sm rounded-t-sm   
                      px-4 py-2"
      >
        {/* Titel */}
        <span className="text-white/80 font-[Inter] font-semibold text-sm sm:text-lg">
          {title}
        </span>
        {/* Hier optional svg rendern */}
      </div>
      {/* Hier unbedingt ein div fuers layout uebergeben fuer den main part */}
      {children}
    </div>
  );
}
