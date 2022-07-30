// REACT
import React, { useEffect } from "react";

// COMPONENTS
import CountrySelect from "./components/countrySelect";

const DocumentationPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <CountrySelect />
    </>
  );
};

export default DocumentationPage;
