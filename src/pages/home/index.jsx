// REACT
import React, { useEffect } from "react";

// COMPONENTS
import TotalByTravelCondition from "./components/totalByTravelCondition";
import CountrySelect from "./components/countrySelect";
import TotalByGender from "./components/totalByGender";
import TotalReturns from "./components/totalReturns";
import TotalBorders from "./components/totalBorders";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <CountrySelect />
      <TotalReturns />
      <TotalByGender />
      <TotalByTravelCondition />
      <TotalBorders />
    </>
  );
};

export default HomePage;
