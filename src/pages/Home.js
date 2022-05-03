import React from "react";
import Service from "../components/contents/Service";
import Header from "../components/Header";
import ProductHero from "../components/ProductHero";

export default function Home() {
  return (
    <div>
      <Header />
      <ProductHero />
      <Service />
    </div>
  );
}
