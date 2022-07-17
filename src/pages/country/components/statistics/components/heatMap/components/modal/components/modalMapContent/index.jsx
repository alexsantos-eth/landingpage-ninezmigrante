// REACT
import React from "react";
import { useParams } from "react-router-dom";

import ModalContentGT from "../../../../../../../../../../components/departments/components/gt";
import ModalContentHN from "../../../../../../../../../../components/departments/components/hn";

const ModalMapContent = ({ modalDep, country }) => {
  const countryID = useParams().countryID || country;

  return (
    <>
      {countryID === "guatemala" && <ModalContentGT modalDep={modalDep} />}
      {countryID === "honduras" && <ModalContentHN modalDep={modalDep} />}
    </>
  );
};

export default ModalMapContent;
