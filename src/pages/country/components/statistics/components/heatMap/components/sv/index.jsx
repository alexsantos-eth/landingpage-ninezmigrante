import React from "react";

// POLYGONS
import Ahuachapan from "../../../../../../../../components/departments/components/polygons/sv/ahuachapan";
import Cabanas from "../../../../../../../../components/departments/components/polygons/sv/cabanas";
import Chalatenango from "../../../../../../../../components/departments/components/polygons/sv/chalatenango";
import Cuscatlan from "../../../../../../../../components/departments/components/polygons/sv/cuscatlan";
import LaLibertad from "../../../../../../../../components/departments/components/polygons/sv/lalibertad";
import LaPaz from "../../../../../../../../components/departments/components/polygons/sv/lapaz";
import LaUnion from "../../../../../../../../components/departments/components/polygons/sv/launion";
import Morazan from "../../../../../../../../components/departments/components/polygons/sv/morazan";
import SanMiguel from "../../../../../../../../components/departments/components/polygons/sv/sanmiguel";
import SanSalvador from "../../../../../../../../components/departments/components/polygons/sv/sansalvador";
import SantaAna from "../../../../../../../../components/departments/components/polygons/sv/santaana";
import SanVicente from "../../../../../../../../components/departments/components/polygons/sv/sanvicente";
import Sonsonate from "../../../../../../../../components/departments/components/polygons/sv/sonsonate";
import Usulutan from "../../../../../../../../components/departments/components/polygons/sv/usulutan";


const HeatMapSV = () => {
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
      viewBox="0 0 800 612"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <Ahuachapan />
      <Cabanas />
      <Chalatenango />
      <Cuscatlan />
      <LaLibertad />
      <LaPaz />
      <LaUnion />
      <Morazan />
      <SanMiguel />
      <SanSalvador />
      <SantaAna />
      <SanVicente />
      <Sonsonate />
      <Usulutan />
    </svg>
  );
};

export default HeatMapSV;
