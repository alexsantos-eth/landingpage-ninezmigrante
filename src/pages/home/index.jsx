// REACT
import React, { useEffect } from "react";

// COMPONENTS
import CountrySelect from "./components/countrySelect";
import TotalReturns from "./components/totalReturns";
import TotalByGender from "./components/totalByGender";
import TotalByTravelCondition from "./components/totalByTravelCondition";

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
    </>
  );
};

export default HomePage;
