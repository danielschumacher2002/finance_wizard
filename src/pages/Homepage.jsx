import InnerPageLayout from "../components/InnerPageLayout";
import OuterPageLayout from "../components/OuterPageLayout";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MainTitle from "../components/MainTitle";
import Burgermenu from "../components/BurgerMenu";
import LegalNotice from "../components/LegalNotice";
import DataPrivacy from "../components/DataPrivacy";
import FooterLinkItems from "../components/FooterLinkItems";
import FooterNav from "../components/FooterNav";
import Notice from "../components/Notice";
import ToolCard from "../components/ToolCard";
import CardIcon from "../components/CardIcon";
import { useState } from "react";
import SideMenu from "../components/SideMenu";

export default function Homepage() {
      const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toolCardData = [
    {
      id: "1",
      title: "Investment",
      desc: "Compound Interest - Calculate Final Value and Profit",
      to: "/investment",
      path: "M544 72C544 58.7 533.3 48 520 48L418.2 48C404.9 48 394.2 58.7 394.2 72C394.2 85.3 404.9 96 418.2 96L462.1 96L350.8 207.3L255.7 125.8C246.7 118.1 233.5 118.1 224.5 125.8L112.5 221.8C102.4 230.4 101.3 245.6 109.9 255.6C118.5 265.6 133.7 266.8 143.7 258.2L240.1 175.6L336.5 258.2C346 266.4 360.2 265.8 369.1 256.9L496.1 129.9L496.1 173.8C496.1 187.1 506.8 197.8 520.1 197.8C533.4 197.8 544.1 187.1 544.1 173.8L544 72zM112 320C85.5 320 64 341.5 64 368L64 528C64 554.5 85.5 576 112 576L528 576C554.5 576 576 554.5 576 528L576 368C576 341.5 554.5 320 528 320L112 320zM159.3 376C155.9 396.1 140.1 412 119.9 415.4C115.5 416.1 111.9 412.5 111.9 408.1L111.9 376.1C111.9 371.7 115.5 368.1 119.9 368.1L151.9 368.1C156.3 368.1 160 371.7 159.2 376.1zM159.3 520.1C160 524.5 156.4 528.1 152 528.1L120 528.1C115.6 528.1 112 524.5 112 520.1L112 488.1C112 483.7 115.6 480 120 480.8C140.1 484.2 156 500 159.4 520.2zM520 480.7C524.4 480 528 483.6 528 488L528 520C528 524.4 524.4 528 520 528L488 528C483.6 528 479.9 524.4 480.7 520C484.1 499.9 499.9 484 520.1 480.6zM480.7 376C480 371.6 483.6 368 488 368L520 368C524.4 368 528 371.6 528 376L528 408C528 412.4 524.4 416.1 520 415.3C499.9 411.9 484 396.1 480.6 375.9zM256 448C256 412.7 284.7 384 320 384C355.3 384 384 412.7 384 448C384 483.3 355.3 512 320 512C284.7 512 256 483.3 256 448z",
      disabled: false,
    },
    {
      id: "2",
      title: "Inflation",
      desc: "Calculate Future Buying Power",
      to: "/inflation",
      path: "M342.6 534.6C330.1 547.1 309.8 547.1 297.3 534.6L137.3 374.6C124.8 362.1 124.8 341.8 137.3 329.3C149.8 316.8 170.1 316.8 182.6 329.3L320 466.7L457.4 329.4C469.9 316.9 490.2 316.9 502.7 329.4C515.2 341.9 515.2 362.2 502.7 374.7L342.7 534.7zM502.6 182.6L342.6 342.6C330.1 355.1 309.8 355.1 297.3 342.6L137.3 182.6C124.8 170.1 124.8 149.8 137.3 137.3C149.8 124.8 170.1 124.8 182.6 137.3L320 274.7L457.4 137.4C469.9 124.9 490.2 124.9 502.7 137.4C515.2 149.9 515.2 170.2 502.7 182.7z",
      disabled: false,
    },
    {
      id: "3",
      title: "Credit",
      desc: "Calculate Total Repayment",
      to: "/credit",
      path: "M64 173.5L64 483.6C64 503 75.8 520.9 94.3 526.9C188.3 556.9 253.1 535.3 317.6 513.8C380 493 442 472.3 529.7 498.5C551.9 505.1 575.9 489.7 575.9 466.5L575.9 156.4C575.9 137 564.1 119.1 545.6 113.1C451.6 83.1 386.8 104.7 322.3 126.2C259.9 147 197.9 167.7 110.2 141.5C88 134.9 63.9 150.3 63.9 173.5zM320 432C267 432 224 381.9 224 320C224 258.1 267 208 320 208C373 208 416 258.1 416 320C416 381.9 373 432 320 432zM191.1 469.5C191.8 473.9 188.3 477.6 183.9 477.6C168.2 477.6 151.8 475.8 133.9 471.5C130.4 470.7 127.9 467.5 127.9 463.8L128 424C128 419.6 131.6 415.9 136 416.5C164.1 420 186.6 441.7 191.2 469.5zM512 418.6C512 423.6 507.4 427.4 502.5 426.6C487.1 424.1 472.3 422.7 458.1 422.3C453.2 422.2 449.4 417.8 450.9 413.1C458.2 389.4 478.9 371.7 504.1 368.5C508.5 368 512.1 371.6 512.1 376L512.1 418.6zM504 223.5C475.9 220 453.4 198.3 448.8 170.5C448.1 166.1 451.6 162.4 456 162.4C471.7 162.4 488.1 164.2 506 168.5C509.5 169.3 512 172.5 512 176.2L512 216.1C512 220.5 508.4 224.2 504 223.6zM181.9 217.7C186.8 217.8 190.6 222.2 189.1 226.9C181.8 250.6 161.1 268.3 135.9 271.5C131.5 272 127.9 268.4 127.9 264L127.9 221.4C127.9 216.4 132.5 212.6 137.4 213.4C152.8 215.9 167.6 217.3 181.8 217.7zM304 252C293 252 284 261 284 272C284 281.7 290.9 289.7 300 291.6L300 340L296 340C285 340 276 349 276 360C276 371 285 380 296 380L344 380C355 380 364 371 364 360C364 349 355 340 344 340L340 340L340 272C340 261 331 252 320 252L304 252z",
      disabled: false,
    },
    {
      id: "4",
      title: "Comming Soon",
      desc: "In Development",
      to: "/*",
      path: "M431.2 476.5L163.5 208.8C141.1 240.2 128 278.6 128 320C128 426 214 512 320 512C361.5 512 399.9 498.9 431.2 476.5zM476.5 431.2C498.9 399.8 512 361.4 512 320C512 214 426 128 320 128C278.5 128 240.1 141.1 208.8 163.5L476.5 431.2zM64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576C178.6 576 64 461.4 64 320z",
      disabled: true,
    },
    {
      id: "5",
      title: "Comming Soon",
      desc: "In Development",
      to: "/*",
      path: "M431.2 476.5L163.5 208.8C141.1 240.2 128 278.6 128 320C128 426 214 512 320 512C361.5 512 399.9 498.9 431.2 476.5zM476.5 431.2C498.9 399.8 512 361.4 512 320C512 214 426 128 320 128C278.5 128 240.1 141.1 208.8 163.5L476.5 431.2zM64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576C178.6 576 64 461.4 64 320z",
      disabled: true,
    },
    {
      id: "6",
      title: "Comming Soon",
      desc: "In Development",
      to: "/*",
      path: "M431.2 476.5L163.5 208.8C141.1 240.2 128 278.6 128 320C128 426 214 512 320 512C361.5 512 399.9 498.9 431.2 476.5zM476.5 431.2C498.9 399.8 512 361.4 512 320C512 214 426 128 320 128C278.5 128 240.1 141.1 208.8 163.5L476.5 431.2zM64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576C178.6 576 64 461.4 64 320z",
      disabled: true,
    },
  ];
  return (
    <OuterPageLayout>
      <Header>
        <Burgermenu toggleMenu={toggleMenu}></Burgermenu>
        <MainTitle></MainTitle>
      </Header>
      <SideMenu menuOpen={menuOpen} toggleMenu={toggleMenu}/>
      <InnerPageLayout>
        {toolCardData.map((cardData) => {
          return (
            <ToolCard
              key={cardData.id}
              title={cardData.title}
              desc={cardData.desc}
              to={cardData.to}
              disabled={cardData.disabled}
            >
              <CardIcon>
                <path d={cardData.path}></path>
              </CardIcon>
            </ToolCard>
          );
        })}
      </InnerPageLayout>
      <Footer>
        <FooterNav>
          <FooterLinkItems text={"Legal Notice"} />
          <FooterLinkItems text={"Data Privacy"} />
        </FooterNav>
        <Notice></Notice>
      </Footer>
    </OuterPageLayout>
  );
}
