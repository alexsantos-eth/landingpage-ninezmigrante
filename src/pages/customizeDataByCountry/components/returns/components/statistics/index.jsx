// REACT
import React from "react";

// CHAKRA UI COMONENTS
import { Box, Stack, Text, Image } from "@chakra-ui/react";

const Statistics = () => {
  return (
    <Box>
      {/* CONTAINER */}
      <Stack direction="column" justifyContent="center" alignItems="center">
        {/* TITLE AND SELECTED DATA */}
        <Stack direction="column" justifyContent="center" alignItems="center">
          <Text fontFamily="Oswald" fontSize="2xl" lineHeight="1">
            DEPARTAMENTOS CON MÁS RETORNADOS
          </Text>
          <Text
            fontSize="2xl"
            lineHeight="1"
            fontWeight="600"
            fontFamily="Times"
          >
            Cuatrimestre 1 - 2022
          </Text>
        </Stack>

        {/* DEPARTMENTS */}
        <Stack direction="row">
          {/* DEPARMENT BOX */}
          <Stack direction="row">
            <Stack>
              <Image></Image>
            </Stack>

            <Stack direction="column">
              <Text>Guatemala</Text>
              <Text>3 200</Text>
            </Stack>
          </Stack>

          {/* DEPARMENT BOX */}
          <Stack direction="row">
            <Stack>
              <Image></Image>
            </Stack>

            <Stack>
              <Text>Quetzaltenango</Text>
              <Text>2 200</Text>
            </Stack>
          </Stack>

          {/* DEPARMENT BOX */}
          <Stack direction="row">
            <Stack>
              <Image></Image>
            </Stack>

            <Stack>
              <Text>Petén</Text>
              <Text>1 700</Text>
            </Stack>
          </Stack>
        </Stack>

        <Stack>{/* DOWLOAD TABLE */}</Stack>
      </Stack>
    </Box>
  );
};

export default Statistics;
