"use client";
import FooterComponents from "@/components/features/footer_components";
import LogInComponents from "@/components/features/login_components";
import NavBarComponents from "@/components/features/navbar_components";
import React from "react";

const LogInPage = () => {
  return (
    <>
      <div className="fixed w-full">
        <NavBarComponents />
      </div>
      <div className=" pt-20">
        <LogInComponents />
      </div>
      <FooterComponents />
    </>
  );
};

export default LogInPage;
