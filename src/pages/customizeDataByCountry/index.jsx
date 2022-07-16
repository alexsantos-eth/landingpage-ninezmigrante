import React, { useEffect } from "react";

// REACT ROUTER DOM
import { useParams } from "react-router-dom";

import Header from "./components/header";
import Trends from "./components/trends";
import Department from "./components/department";
import Returns from "./components/returns";

const CustomizeDataByCountry = () => {
  const { countryID } = useParams();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [countryID]);

  return (
    <>
      <Header />
      <Trends />
      <Department />
      <Returns />
    </>
  );
};

export default CustomizeDataByCountry;
