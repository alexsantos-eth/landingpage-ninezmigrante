import React from "react";

//  UTILS
import { depColors } from "../../utils";

// CHACKRA
import { Text, Stack, Image, CloseButton, Box } from "@chakra-ui/react";

import MaleIcon from "../../../../../../assets/male.png";
import FemaleIcon from "../../../../../../assets/femenine.png";

const DepartmentData = ({ item, index, setDepDataList }) => {
  // REMOVE
  const removeData = () =>
    setDepDataList((prev) =>
      prev.map((item, i) => (i === index ? { ...item, reload: true } : item))
    );

  return item.reload ? (
    <Stack
      height="100%"
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Text>Sin datos cargados</Text>
    </Stack>
  ) : (
    <Box style={{ position: "relative" }}>
      <CloseButton
        onClick={removeData}
        style={{ position: "absolute", right: 8 }}
      />
      <Stack direction="column" alignItems="center" p={4}>
        {/* IMAGEN DE DEPARTAMENTO */}
        <svg
          x="0px"
          y="0px"
          version="1.2"
          width="100%"
          height="100"
          className="depSVG"
          xmlSpace="preserve"
          viewBox="0 0 585.94 612"
          style={{ marginBottom: "16px" }}
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <item.Content customColor={depColors[index]} disableHeat />
        </svg>

        {/* NOMBRE */}
        <Text fontSize="1.2em" fontWeight="500">
          {item.name}
        </Text>

        {/* TOTAL */}
        <Text fontSize="2em" fontWeight="500">
          {item.total}
        </Text>

        {/* TOTAL MUJERES */}
        <Stack direction="row" alignItems="center">
          <Image src={FemaleIcon} height={5} />
          <Text fontWeight="500"> {item.female} Femenino</Text>
        </Stack>

        {/* TOTAL HOMBRES */}
        <Stack direction="row" alignItems="center">
          <Image src={MaleIcon} height={5} />
          <Text fontWeight="500">{item.male} Masculino</Text>
        </Stack>
      </Stack>
    </Box>
  );
};

export default DepartmentData;
