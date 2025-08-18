import { Link } from "react-router";

export default function NoticeText({ title, switchLink, blocks }) {
  console.log(title);
  return (
    <div className="m-auto text-white p-10 flex flex-col gap-10 md:text-center">
      <h1 className="text-4xl font-extrabold border-b border-white/10 pb-4 text-special md:text-6xl md:text-center">
        {title}
      </h1>

      {switchLink && (
        <Link
          className="inline-block text-lg underline text-special md:text-2xl md:text-center"
          to={switchLink.to}
        >
          {switchLink.label}
        </Link>
      )}

      {blocks.map((block, idx) => {
        if (block.type === "lines") {
          return (
            <div
              key={idx}
              className="text-gray-300 flex flex-col gap-1 md:gap-5"
            >
              {block.heading && (
                <p className="font-semibold text-white/90 md:text-2xl md:max-w-lg">
                  {block.heading}
                </p>
              )}
              {block.lines.map((line, i) => (
                <p key={i} className="md:text-xl">
                  {line}
                </p>
              ))}
            </div>
          );
        }

        if (block.type === "contact") {
          return (
            <div
              key={idx}
              className="text-gray-300 flex flex-col gap-1 md:text-2xl"
            >
              {block.heading && (
                <p className="font-semibold text-white/90">{block.heading}</p>
              )}
              {block.items.map((item, i) => (
                <p key={i}>
                  <span className="font-semibold text-white/90">
                    {item.label}:
                  </span>{" "}
                  {item.href ? (
                    <a href={item.href} className="underline">
                      {item.value}
                    </a>
                  ) : (
                    <span>{item.value}</span>
                  )}
                </p>
              ))}
            </div>
          );
        }

        return null;
      })}
    </div>
  );
}
