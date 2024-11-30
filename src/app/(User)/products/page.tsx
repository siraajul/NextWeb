"use client";

import HomePage from "@/app/page";
import FooterComponents from "@/components/features/footer_components";
import NavBarComponents from "@/components/features/navbar_components";
import ProductComponents from "@/components/features/product_components";
import React from "react";

const ProdutPage = () => {
  return (
    <>
    <NavBarComponents/>
      <ProductComponents />
      <HomePage/>
      <FooterComponents/>

    </>
  );
};

export default ProdutPage;
