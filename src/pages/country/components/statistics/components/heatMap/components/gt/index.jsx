import React from "react";

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

const HeatMapGT = () => {
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
      viewBox="0 0 585.94 612"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <BajaVerapaz />
      <Chimaltenango />
      <SanMarcos />
      <Quiche />
      <Suchitepequez />
      <Quetzaltenango />
      <Totonicapan />
      <Solola />
      <Zacapa />
      <Peten />
      <Guatemala />
      <SantaRosa />
      <Sacatepequez />
      <Retalhuleu />
      <Jutiapa />
      <Jalapa />
      <Izabal />
      <Huehuetenango />
      <Escuintla />
      <Progreso />
      <Chiquimula />
      <AltaVerapaz />
    </svg>
  );
};

export default HeatMapGT;
