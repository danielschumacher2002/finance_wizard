import InnerPageLayout from "./InnerPageLayout";
import OuterPageLayout from "./OuterPageLayout";
import Header from "../components/Header";
import Burgermenu from "../components/BurgerMenu";
import MainTitle from "../components/MainTitle";
import SideMenu from "../components/SideMenu";
import { useState } from "react";
import Footer from "../components/Footer";
import FooterLinkItems from "../components/FooterLinkItems";
import FooterNav from "../components/FooterNav";
import Notice from "../components/Notice";
import NavBar from "../components/NavBar";
import NavItem from "../components/NavItem";

export default function PageLayout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <OuterPageLayout>
      <Header>
        <Burgermenu toggleMenu={toggleMenu}></Burgermenu>
        <MainTitle></MainTitle>
        <NavBar>
          <NavItem text={`Home`} path={"/finance_wizard/"}></NavItem>
          <NavItem text={`About`} path={"/finance_wizard/about"}></NavItem>
          <NavItem
            text={`Github`}
            path={"https://github.com/danielschumacher2002/finance_calculator"}
          ></NavItem>
          <NavItem text={`Feedback`} path={"/finance_wizard/*"} disabled={true}></NavItem>
        </NavBar>
      </Header>
      <SideMenu menuOpen={menuOpen} toggleMenu={toggleMenu} />
      <InnerPageLayout>{children}</InnerPageLayout>
      <Footer>
        <FooterNav>
          <FooterLinkItems text={"Legal Notice"} path={"/finance_wizard/notice"} />
          <FooterLinkItems text={"Data Privacy"} path={"/finance_wizard/privacy"} />
        </FooterNav>
        <Notice></Notice>
      </Footer>
    </OuterPageLayout>
  );
}
