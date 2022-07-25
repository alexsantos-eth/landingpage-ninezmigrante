import React from "react";

// POLYGONS
import Atlantida from "../../../../../../../../components/departments/components/polygons/hn/atlantida";
import Choluteca from "../../../../../../../../components/departments/components/polygons/hn/choluteca";
import Colon from "../../../../../../../../components/departments/components/polygons/hn/colon";
import Comayagua from "../../../../../../../../components/departments/components/polygons/hn/comayagua";
import Copan from "../../../../../../../../components/departments/components/polygons/hn/copan";
import Cortes from "../../../../../../../../components/departments/components/polygons/hn/cortes";
import ElParaiso from "../../../../../../../../components/departments/components/polygons/hn/elparaiso";
import Francis from "../../../../../../../../components/departments/components/polygons/hn/francis";
import Gracias from "../../../../../../../../components/departments/components/polygons/hn/gracias";
import Intibuca from "../../../../../../../../components/departments/components/polygons/hn/intibuca";
import IslasBahia from "../../../../../../../../components/departments/components/polygons/hn/islasbahia";
import LaPaz from "../../../../../../../../components/departments/components/polygons/hn/lapaz";
import Lempira from "../../../../../../../../components/departments/components/polygons/hn/lempira";
import Ocotepeque from "../../../../../../../../components/departments/components/polygons/hn/ocotepeque";
import Olancho from "../../../../../../../../components/departments/components/polygons/hn/olancho";
import SantaBarbara from "../../../../../../../../components/departments/components/polygons/hn/santabarbara";
import Valle from "../../../../../../../../components/departments/components/polygons/hn/valle";
import Yoro from "../../../../../../../../components/departments/components/polygons/hn/yoro";

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
