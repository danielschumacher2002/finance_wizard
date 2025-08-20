import SideMenuLink from "./SideMenuLink";

export default function SideMenu({ isOpen }) {
  const linkData = [
    {
      text: "Coming Soon",
      to: "/",
    },
    {
      text: "Coming Soon",
      to: "/",
    },
    {
      text: "Legal Notice",
      to: "/legal",
    },
    {
      text: "Data Privacy",
      to: "/privacy",
    },
  ];

  return (
    // Ganzes Side Menu div
    <div
      className={`bg-secondary
                         fixed top-0 left-0 bottom-0 z-10
                         ${isOpen ? "" : "-translate-x-full"}
                         transition-transform ease-in-out duration-300
                         w-1/2`}
    >
      {/* Div fuer die gruppierten links*/}
      <div
        className="flex flex-col gap-10
                        pl-6 pt-10"
      >
        {linkData.map((data) => {
          return <SideMenuLink text={data.text} to={data.to}></SideMenuLink>;
        })}
      </div>
    </div>
  );
}
