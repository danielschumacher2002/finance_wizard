import { Link } from "react-router-dom";
import LinkArrow from "./LinkArrow";

export default function ToolCard({
  title,
  desc,
  to,
  children,
  disabled = false,
}) {
  return (
    <Link
      to={to}
      className={`flex flex-col gap-2 min-h-40 rounded-xl border border-white/10 bg-[#181818] p-4 ${disabled ? "opacity-50 cursor-not-allowed" : "opacity-100"} md:justify-center md:items-center md:hover:brightness-125 md:gap-5`}
    >
      <div className="flex items-center gap-3 md:gap-5">
        <ToolCardIcon svg={children} />
        <ToolCardTitle title={title} />
      </div>
      <ToolCardDescription description={desc} />
      <ToolCardFooter disabled={disabled}></ToolCardFooter>
    </Link>
  );
}

function ToolCardIcon({ svg }) {
  return <span className={`text-special`}>{svg}</span>;
}

function ToolCardTitle({ title }) {
  return (
    <h3 className="font-semibold text-white text-xl md:text-3xl">{title}</h3>
  );
}

function ToolCardDescription({ description }) {
  return (
    <p className="mt-3 text-md text-neutral-300 md:text-2xl text-center">
      {description}
    </p>
  );
}

function ToolCardFooter({ disabled }) {
  const text = disabled ? "Closed" : "Open";
  return (
    <span className={`mt-2 flex items-center gap-1 text-md text-special`}>
      {text}
      <LinkArrow></LinkArrow>
    </span>
  );
}
