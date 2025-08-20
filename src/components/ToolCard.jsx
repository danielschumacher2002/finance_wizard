import React from "react";

export function ToolCard({ path, color, title, desc }) {
  return (
    /* ToolCards nehmen volle breite grid parent muss regeln*/
    <div
      className="flex gap-2 sm:gap-3
                 pl-8 py-2
                 h-25 sm:h-30 lg:h-35
                 rounded-lg
                 hover:bg-[#282828]"
    >
      <div className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 640"
          fill={color}
          className={`size-11 sm:size-13 lg:size-15`}
        >
          <path d={path}></path>
        </svg>
      </div>
      <div className="flex flex-col justify-center gap-1 sm:gap-2">
        <p className="text-white/80 font-[Inter] font-bold text-md sm:text-lg lg:text-xl">
          {title}
        </p>
        <p className="text-white/40 font-[Inter] text-sm sm:text-base lg:text-md">
          {desc}
        </p>
      </div>
    </div>
  );
}
