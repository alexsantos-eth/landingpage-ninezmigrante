import React from "react";

import { Box } from "@chakra-ui/react";

import Mexico from "./mexico";
import EEUU from "./eeuu";

const Statistics = () => {
  return (
    <Box bgColor="#d9e8e8">
      <Mexico />
      <EEUU />
    </Box>
  );
};

export default Statistics;
