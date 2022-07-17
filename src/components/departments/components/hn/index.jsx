import React, { useRef } from "react";

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

const ModalContentHN = ({ id, customColor = "", disableHeat = false }) => {
  const svgRef = useRef(null);
  useSVGResize(svgRef);

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
      {id === "atlantida" && (
        <Atlantida customColor={customColor} disableHeat={disableHeat} />
      )}
      {id === "choluteca" && (
        <Choluteca customColor={customColor} disableHeat={disableHeat} />
      )}
      {id === "colon" && (
        <Colon customColor={customColor} disableHeat={disableHeat} />
      )}
      {id === "comayagua" && (
        <Comayagua customColor={customColor} disableHeat={disableHeat} />
      )}
      {id === "copan" && (
        <Copan customColor={customColor} disableHeat={disableHeat} />
      )}
      {id === "cortes" && (
        <Cortes customColor={customColor} disableHeat={disableHeat} />
      )}
      {id === "elparaiso" && (
        <ElParaiso customColor={customColor} disableHeat={disableHeat} />
      )}
      {id === "francis" && (
        <Francis customColor={customColor} disableHeat={disableHeat} />
      )}
      {id === "gracias" && (
        <Gracias customColor={customColor} disableHeat={disableHeat} />
      )}
      {id === "intibuca" && (
        <Intibuca customColor={customColor} disableHeat={disableHeat} />
      )}
      {id === "islasbahia" && (
        <IslasBahia customColor={customColor} disableHeat={disableHeat} />
      )}
      {id === "lapaz" && (
        <LaPaz customColor={customColor} disableHeat={disableHeat} />
      )}
      {id === "lempira" && (
        <Lempira customColor={customColor} disableHeat={disableHeat} />
      )}
      {id === "ocotepeque" && (
        <Ocotepeque customColor={customColor} disableHeat={disableHeat} />
      )}
      {id === "olancho" && (
        <Olancho customColor={customColor} disableHeat={disableHeat} />
      )}
      {id === "santabarbara" && (
        <SantaBarbara customColor={customColor} disableHeat={disableHeat} />
      )}
      {id === "valle" && (
        <Valle customColor={customColor} disableHeat={disableHeat} />
      )}
      {id === "yoro" && (
        <Yoro customColor={customColor} disableHeat={disableHeat} />
      )}
    </svg>
  );
};

export default ModalContentHN;
