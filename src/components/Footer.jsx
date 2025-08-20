import FooterLinkItem from "./FooterLinkItem";

export default function Footer() {
  return (
    <footer
      className="bg-secondary rounded-sm
                    flex flex-col gap-2
                            h-20"
    >
      {/* Fuer mehr links im footer grid und vlt kleinern text oder mehr hoehe */}
      <div className="flex-1 flex items-end justify-center gap-3 sm:gap-4 lg:gap-5">
        <FooterLinkItem text={"Legal Notice"} to={"/legal"} />
        <FooterLinkItem text={"Data Privacy"} to={"/privacy"} />
      </div>
      <div className="flex-1 text-center">
        <p className="text-white/60 font-[Inter] font-light text-sm sm:text-md">
          Icons by Font Awesome
        </p>
      </div>
    </footer>
  );
}
