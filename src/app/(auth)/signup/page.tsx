"use client";
import FooterComponents from "@/components/features/footer_components";
import NavBarComponents from "@/components/features/navbar_components";
import SignUpComponents from "@/components/features/signup_component";
import React from "react";

const SignUpPage = () => {
  return (
    <>
      <div className="fixed w-full">
        <NavBarComponents />
      </div>
      <div className=" pt-20">
        <SignUpComponents />
      </div>
      <FooterComponents />
    </>
  );
};

export default SignUpPage;
