"use client";
import Header from "./Components/Header";
import Banner from "./Components/Banner";
import ThreeCardsSection from "./Components/ThreeCardsSection";
import TwoCardsSection from "./Components/TwoCardsSection";
import BestTestedFood from "./Components/BestTestedFood";
import PopularFoodSection from "./Components/PopularFoodSection";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease",
      once: true,
      anchorPlacement: "top-bottom",
    });
  }, []);
  return (
    <>
      <div className="">
        <Header />
        <div className="">
          <Banner />
          <ThreeCardsSection />
          <TwoCardsSection />
          <BestTestedFood />
          <PopularFoodSection />
        </div>
      </div>
    </>
  );
}
