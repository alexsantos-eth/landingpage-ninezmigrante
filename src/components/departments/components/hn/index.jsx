import React from "react";

// POLYGONS
import Atlantida from "../polygons/hn/atlantida";
import Choluteca from "../polygons/hn/choluteca";
import Colon from "../polygons/hn/colon";
import Comayagua from "../polygons/hn/comayagua";
import Copan from "../polygons/hn/copan";
import Cortes from "../polygons/hn/cortes";
import ElParaiso from "../polygons/hn/elparaiso";
import Francis from "../polygons/hn/francis";
import Gracias from "../polygons/hn/gracias";
import Intibuca from "../polygons/hn/intibuca";
import IslasBahia from "../polygons/hn/islasbahia";
import LaPaz from "../polygons/hn/lapaz";
import Lempira from "../polygons/hn/lempira";
import Ocotepeque from "../polygons/hn/ocotepeque";
import Olancho from "../polygons/hn/olancho";
import SantaBarbara from "../polygons/hn/santabarbara";
import Valle from "../polygons/hn/valle";
import Yoro from "../polygons/hn/yoro";

import useSVGResize from "../../hooks";

const ModalContentHN = ({
  modalDep,
  deps = [],
  customColor = "",
  disableHeat = false,
}) => {
  useSVGResize([...modalDep, ...deps]);

  return (
    <svg
      xmlnsMapsvg="http://mapsvg.com"
      xmlnsDc="http://purl.org/dc/elements/1.1/"
      xmlnsRdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
      xmlnsSvg="http://www.w3.org/2000/svg"
      xmlns="http://www.w3.org/2000/svg"
      mapsvgGeoViewBox="-89.351340 17.418870 -83.127223 12.984061"
      width="100%"
      height="100%"
      id="departmentSVG"
    >
      {modalDep === "atlantida" && (
        <Atlantida customColor={customColor} disableHeat={disableHeat} />
      )}
      {modalDep === "choluteca" && (
        <Choluteca customColor={customColor} disableHeat={disableHeat} />
      )}
      {modalDep === "colon" && (
        <Colon customColor={customColor} disableHeat={disableHeat} />
      )}
      {modalDep === "comayagua" && (
        <Comayagua customColor={customColor} disableHeat={disableHeat} />
      )}
      {modalDep === "copan" && (
        <Copan customColor={customColor} disableHeat={disableHeat} />
      )}
      {modalDep === "cortes" && (
        <Cortes customColor={customColor} disableHeat={disableHeat} />
      )}
      {modalDep === "elparaiso" && (
        <ElParaiso customColor={customColor} disableHeat={disableHeat} />
      )}
      {modalDep === "francis" && (
        <Francis customColor={customColor} disableHeat={disableHeat} />
      )}
      {modalDep === "gracias" && (
        <Gracias customColor={customColor} disableHeat={disableHeat} />
      )}
      {modalDep === "intibuca" && (
        <Intibuca customColor={customColor} disableHeat={disableHeat} />
      )}
      {modalDep === "islasbahia" && (
        <IslasBahia customColor={customColor} disableHeat={disableHeat} />
      )}
      {modalDep === "lapaz" && (
        <LaPaz customColor={customColor} disableHeat={disableHeat} />
      )}
      {modalDep === "lempira" && (
        <Lempira customColor={customColor} disableHeat={disableHeat} />
      )}
      {modalDep === "ocotepeque" && (
        <Ocotepeque customColor={customColor} disableHeat={disableHeat} />
      )}
      {modalDep === "olancho" && (
        <Olancho customColor={customColor} disableHeat={disableHeat} />
      )}
      {modalDep === "santabarbara" && (
        <SantaBarbara customColor={customColor} disableHeat={disableHeat} />
      )}
      {modalDep === "valle" && (
        <Valle customColor={customColor} disableHeat={disableHeat} />
      )}
      {modalDep === "yoro" && (
        <Yoro customColor={customColor} disableHeat={disableHeat} />
      )}
    </svg>
  );
};

export default ModalContentHN;
