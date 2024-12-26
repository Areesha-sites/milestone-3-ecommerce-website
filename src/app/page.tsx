import Header from "./Components/Header";
import Banner from "./Components/Banner";
import ThreeCardsSection from "./Components/ThreeCardsSection";
import TwoCardsSection from "./Components/TwoCardsSection";
import BestTestedFood from "./Components/BestTestedFood";
import PopularFoodSection from "./Components/PopularFoodSection";
export default function Home() {
  return (
    <>
      <div className="">
        <Header />
          <Banner />
          <ThreeCardsSection />
          <TwoCardsSection />
          <BestTestedFood />
          <PopularFoodSection/>
          {/* <OurMenu/> */}
          {/* <FriesData/> */}
          {/* <MargaritaDisplay/> */}
        </div>
  
    </>
  );
}
