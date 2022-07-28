import React from "react";

import { Box, Stack, Text } from "@chakra-ui/react";

import Options from "./components/options";

const SelectOptions = ({ onChange, satisticsRef }) => {
  return (
    <Box bgColor="blue.500" padding={{ base: "40px 24px", md: "80px 40px" }}>
      <Stack direction="column" justifyContent="center" alignItems="center">
        <Text
          fontSize={{ base: "5xl", md: "6xl" }}
          lineHeight="1.2"
          color="green.700"
          marginBottom="40px"
          textAlign="center"
          fontFamily="Oswald"
        >
          Comparar datos
        </Text>
      </Stack>
      <Stack
        gap="40px"
        alignItems="center"
        justifyContent="center"
        direction={{ base: "column", md: "row" }}
      >
        <Options id="1" onChange={onChange} satisticsRef={satisticsRef} />
        <Options id="2" onChange={onChange} satisticsRef={satisticsRef} />
      </Stack>
    </Box>
  );
};

export default SelectOptions;
