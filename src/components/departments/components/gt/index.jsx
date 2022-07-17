import React, { useEffect } from "react";

// POLYGONS
import Quetzaltenango from "../polygons/gt/quetzaltenango";
import Huehuetenango from "../polygons/gt/huehuetenango";
import Chimaltenango from "../polygons/gt/chimaltenango";
import Suchitepequez from "../polygons/gt/suchitepequez";
import Sacatepequez from "../polygons/gt/sacatepequez";
import AltaVerapaz from "../polygons/gt/altaVerapaz";
import BajaVerapaz from "../polygons/gt/bajaVerapaz";
import Totonicapan from "../polygons/gt/totonicapan";
import Retalhuleu from "../polygons/gt/retalhuleu";
import Chiquimula from "../polygons/gt/chiquimula";
import Guatemala from "../polygons/gt/guatemala";
import SantaRosa from "../polygons/gt/santaRosa";
import Escuintla from "../polygons/gt/escuintla";
import SanMarcos from "../polygons/gt/sanMarcos";
import Progreso from "../polygons/gt/progreso";
import Jutiapa from "../polygons/gt/jutiapa";
import Zacapa from "../polygons/gt/zacapa";
import Jalapa from "../polygons/gt/jalapa";
import Quiche from "../polygons/gt/quiche";
import Solola from "../polygons/gt/solola";
import Izabal from "../polygons/gt/izabal";
import Peten from "../polygons/gt/peten";

import useSVGResize from "../../hooks";

const ModalContentGT = ({
  modalDep,
  customColor = "",
  disableHeat = false,
}) => {
  useSVGResize();

  return (
    <svg
      x="0px"
      y="0px"
      version="1.2"
      width="100%"
      height="100%"
      id="departmentSVG"
      xmlSpace="preserve"
      viewBox="0 0 585.94 612"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      {modalDep === "quetzaltenango" && (
        <Quetzaltenango customColor={customColor} disableHeat={disableHeat} />
      )}
      {modalDep === "huehuetenango" && (
        <Huehuetenango customColor={customColor} disableHeat={disableHeat} />
      )}
      {modalDep === "chimaltenango" && (
        <Chimaltenango customColor={customColor} disableHeat={disableHeat} />
      )}
      {modalDep === "suchitepequez" && (
        <Suchitepequez customColor={customColor} disableHeat={disableHeat} />
      )}
      {modalDep === "sacatepequez" && (
        <Sacatepequez customColor={customColor} disableHeat={disableHeat} />
      )}
      {modalDep === "altaverapaz" && (
        <AltaVerapaz customColor={customColor} disableHeat={disableHeat} />
      )}
      {modalDep === "bajaverapaz" && (
        <BajaVerapaz customColor={customColor} disableHeat={disableHeat} />
      )}
      {modalDep === "totonicapan" && (
        <Totonicapan customColor={customColor} disableHeat={disableHeat} />
      )}
      {modalDep === "retalhuleu" && (
        <Retalhuleu customColor={customColor} disableHeat={disableHeat} />
      )}
      {modalDep === "chiquimula" && (
        <Chiquimula customColor={customColor} disableHeat={disableHeat} />
      )}
      {modalDep === "guatemala" && (
        <Guatemala customColor={customColor} disableHeat={disableHeat} />
      )}
      {modalDep === "santarosa" && (
        <SantaRosa customColor={customColor} disableHeat={disableHeat} />
      )}
      {modalDep === "escuintla" && (
        <Escuintla customColor={customColor} disableHeat={disableHeat} />
      )}
      {modalDep === "sanmarcos" && (
        <SanMarcos customColor={customColor} disableHeat={disableHeat} />
      )}
      {modalDep === "elprogreso" && (
        <Progreso customColor={customColor} disableHeat={disableHeat} />
      )}
      {modalDep === "jutiapa" && (
        <Jutiapa customColor={customColor} disableHeat={disableHeat} />
      )}
      {modalDep === "zacapa" && (
        <Zacapa customColor={customColor} disableHeat={disableHeat} />
      )}
      {modalDep === "jalapa" && (
        <Jalapa customColor={customColor} disableHeat={disableHeat} />
      )}
      {modalDep === "quiche" && (
        <Quiche customColor={customColor} disableHeat={disableHeat} />
      )}
      {modalDep === "solola" && (
        <Solola customColor={customColor} disableHeat={disableHeat} />
      )}
      {modalDep === "izabal" && (
        <Izabal customColor={customColor} disableHeat={disableHeat} />
      )}
      {modalDep === "peten" && (
        <Peten customColor={customColor} disableHeat={disableHeat} />
      )}
    </svg>
  );
};

export default ModalContentGT;
