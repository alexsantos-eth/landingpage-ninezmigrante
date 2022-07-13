import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import CountrySelect from "./components/countrySelect";

const PersonalizePage = () => {
  const { countryID } = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [countryID]);

  return <CountrySelect />;
};

export default PersonalizePage;
