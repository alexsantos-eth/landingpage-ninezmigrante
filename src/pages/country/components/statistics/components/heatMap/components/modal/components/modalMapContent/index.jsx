// REACT
import React from "react";
import { useParams } from "react-router-dom";

import ModalContentGT from "../../../../../../../../../../components/departments/components/gt";
import ModalContentHN from "../../../../../../../../../../components/departments/components/hn";
import ModalContentSV from "../../../../../../../../../../components/departments/components/sv";

import getCountryContent from "../../../../../../../../../../utils/country";

const ModalMapContent = ({ modalDep, country }) => {
  const countryID = useParams().countryID || country;

  return getCountryContent({
    countryID,
    content: {
      guatemala: <ModalContentGT id={modalDep} />,
      honduras: <ModalContentHN id={modalDep} />,
      elsalvador: <ModalContentSV id={modalDep} />,
    },
  });
};

export default ModalMapContent;
