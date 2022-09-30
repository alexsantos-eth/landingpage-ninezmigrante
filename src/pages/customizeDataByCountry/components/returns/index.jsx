import React, { useState } from "react";

import { Box } from "@chakra-ui/react";

import Header from "./components/header";
import Statistics from "./components/statistics";

const Returns = () => {
  const [returns, setReturns] = useState({});

  const handleChange = (e) => {
    setReturns((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleMonts = (ranges) => {
    setReturns((prevState) => ({
      ...prevState,
      period: ranges,
    }));
  };

  return (
    <Box bgColor="#d9e8e8">
      <Header
        returns={returns}
        handleChange={handleChange}
        handleMonts={handleMonts}
      />
      <Statistics returns={returns} />
    </Box>
  );
};

export default Returns;
