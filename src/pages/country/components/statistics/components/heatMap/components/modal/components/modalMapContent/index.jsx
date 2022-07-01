// REACT
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import ModalContentGT from "./components/gt";
import ModalContentHN from "./components/hn";

const ModalMapContent = ({ modalDep, country }) => {
  const countryID = useParams().countryID || country;

  useEffect(() => {
    const svg = document.getElementById("modalSVG");
    if (svg) {
      const bbox = svg.getBBox();
      const viewBox = [bbox.x, bbox.y, bbox.width, bbox.height].join(" ");
      svg.setAttribute("viewBox", viewBox);
    }
  }, [modalDep, countryID]);

  return (
    <>
      {countryID === "guatemala" && <ModalContentGT modalDep={modalDep} />}
      {countryID === "honduras" && <ModalContentHN modalDep={modalDep} />}
    </>
  );
};

export default ModalMapContent;
