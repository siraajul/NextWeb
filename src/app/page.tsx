"use client";
import FooterComponents from "@/components/features/footer_components";
import HomePageComponents from "@/components/features/homepage_components";
import NavBarComponents from "@/components/features/navbar_components";
import React from "react";

const HomePage = () => {
  return (
    <>
      <div className="fixed w-full">
        <NavBarComponents />
      </div>
      <div className=" pt-20">
        <HomePageComponents />
      </div>
      <FooterComponents />
    </>
  );
};

export default HomePage;
