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
      className={`h-30 rounded-xl border border-white/10 bg-[#181818] ${disabled ? "opacity-50 cursor-not-allowed" : "opacity-100"} md:hover:brightness-125 md:h-40 xl:h-50`}
    >
      <div className="flex flex-row gap-2  items-center pl-8 h-full pr-4">
        <ToolCardIcon svg={children} />
        <div className="flex flex-col gap-1">
          <ToolCardTitle title={title} />
          <ToolCardDescription description={desc} />
        </div>
      </div>
    </Link>
  );
}

function ToolCardIcon({ svg }) {
  return <span className={`text-special`}>{svg}</span>;
}

function ToolCardTitle({ title }) {
  return (
    <h3 className="font-semibold text-white text-sm md:text-md xl:text-2xl">
      {title}
    </h3>
  );
}

function ToolCardDescription({ description }) {
  return (
    <p className="text-[12px] text-neutral-300 md:text-sm  xl:text-md">
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
