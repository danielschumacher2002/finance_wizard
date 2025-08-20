import React, { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import HomeDashboard from "../components/HomeDashboard";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SideMenu from "../components/SideMenu";
import Overlay from "../components/Overlay";
import DailyDose from "../components/DailyDose";
import SocialMedia from "../components/SocialMedia";
import ComingSoon from "../components/ComingSoon";
import useSideMenu from "../hooks/SideMenuHook";
import MainLayoutInner from "../layouts/MainLayoutInner";

export default function HomePage() {
  const [menuOpen, toggleSideMenu] = useSideMenu();
  return (
    <MainLayout>
      {/* Sind fixed */}
      <Header toggleSideMenu={toggleSideMenu}></Header>
      <SideMenu isOpen={menuOpen}></SideMenu>
      <Overlay isActive={menuOpen} toggleFunc={toggleSideMenu}></Overlay>

      <MainLayoutInner>
        <HomeDashboard></HomeDashboard>
        <DailyDose></DailyDose>
        <SocialMedia></SocialMedia>
        <ComingSoon></ComingSoon>
        <ComingSoon></ComingSoon>
        <ComingSoon></ComingSoon>
        <Footer></Footer>
      </MainLayoutInner>
    </MainLayout>
  );
}
