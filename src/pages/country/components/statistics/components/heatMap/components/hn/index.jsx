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

const HeatMapHN = () => {
  return (
    <svg
      x="0px"
      y="0px"
      id="Capa_1"
      version="1.2"
      width="100%"
      height="100%"
      baseProfile="tiny"
      xmlSpace="preserve"
      viewBox="0 0 700 612"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <Atlantida />
      <Choluteca />
      <Colon />
      <Comayagua />
      <Copan />
      <Cortes />
      <ElParaiso />
      <Francis />
      <Gracias />
      <Intibuca />
      <IslasBahia />
      <LaPaz />
      <Lempira />
      <Ocotepeque />
      <Olancho />
      <SantaBarbara />
      <Valle />
      <Yoro />
    </svg>
  );
};

export default HeatMapHN;
