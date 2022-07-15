import React, { useEffect } from "react";

// REACT ROUTER DOM
import { useParams } from "react-router-dom";

import Header from "./components/header";
import DnDDepartment from "./components/dndDepartment";

const CustomizeDataByCountry = () => {
  const { countryID } = useParams();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [countryID]);

  return (
    <>
      <Header />
      <DnDDepartment />
    </>
  );
};

export default CustomizeDataByCountry;
