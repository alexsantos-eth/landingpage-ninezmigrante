import { Stack, Image } from "@chakra-ui/react";
import React from "react";
import { colors } from "../../../../../../../utils/theme";

// ASSETS
import MaleIcon from "../../../../../../../assets/male.png";
import FemaleIcon from "../../../../../../../assets/femenine.png";
import Airplane from "../../../../../../../assets/airplane.png";
import BusIcon from "../../../../../../../assets/bus.png";
import FamilyIcon from "../../../../../../../assets/family.png";
import GroupIcon from "../../../../../../../assets/group.png";
import AgeGroupIcon from "../../../../../../../assets/age-group.png";

import BarChartIcon from "../../../../../../../assets/bar-chart.png";
import AreaChartIcon from "../../../../../../../assets/area-chart.png";
import GroupedChartIcon from "../../../../../../../assets/chart-stacked.png";

import MexIcon from "../../../../../../../assets/mexico.svg";
import UsaIcon from "../../../../../../../assets/usa.svg";

export const itemColors = [colors.blue[700], colors.red[700], colors.heat[800]];

export const graphDataTypes = {
  condition: "Condicion de Viaje",
  return: "Pais de Retorno",
  via: "Via de Retorno",
  age: "Rango Etario",
  gender: "Género",
};

export const customPeriods = [
  "Año en curso",
  "Ultimos 4 periodos",
  "Ultimos 3 años",
];
export const customDataTypes = [
  {
    id: "gender",
    name: "Género",
    Content: (
      <Stack
        height="100%"
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ filter: "brightness(0) saturate(100%)" }}
      >
        <Image src={MaleIcon} height="23px" />
        <Image src={FemaleIcon} height="23px" />
      </Stack>
    ),
  },
  {
    id: "via",
    name: "Via de retorno",
    Content: (
      <Stack
        height="100%"
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ filter: "brightness(0) saturate(100%)" }}
      >
        <Image src={BusIcon} height="23px" />
        <Image src={Airplane} height="23px" />
      </Stack>
    ),
  },
  {
    id: "condition",
    name: "Condicion de viaje",
    Content: (
      <Stack
        height="100%"
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ filter: "brightness(0) saturate(100%)" }}
      >
        <Image src={FamilyIcon} height="23px" />
        <Image src={GroupIcon} height="23px" />
      </Stack>
    ),
  },
  {
    id: "return",
    name: "Pais de retorno",
    Content: (
      <Stack
        height="100%"
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ filter: "brightness(0) saturate(100%)" }}
      >
        <Image src={UsaIcon} height="23px" />
        <Image src={MexIcon} height="23px" />
      </Stack>
    ),
  },
  {
    id: "age",
    name: "Rango etario",
    Content: (
      <Stack
        height="100%"
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ filter: "brightness(0) saturate(100%)" }}
      >
        <Image src={AgeGroupIcon} height="35px" />
      </Stack>
    ),
  },
];

export const customDataChart = [
  {
    id: "bar",
    name: "Barras",
    Content: <Image src={BarChartIcon} height="35px" />,
  },
  {
    id: "area",
    name: "Área",
    Content: <Image src={AreaChartIcon} height="35px" />,
  },
  {
    id: "group",
    name: "Agrupado",
    Content: <Image src={GroupedChartIcon} height="35px" />,
  },
];

export const datasetLabels = {
  gender: ["Femenino", "Masculino"],
  age: ["Primera infancia", "Niñez", "Adolescencia"],
  via: ["Terrestre", "Aérea"],
  condition: ["Acompañado", "No acompañado"],
  return: ["Estados Unidos", "México", "Canada"],
};
