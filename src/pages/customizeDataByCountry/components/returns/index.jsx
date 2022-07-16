import React, { useState } from "react";

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

  return (
    <>
      <Header returns={returns} handleChange={handleChange} />
      <Statistics returns={returns} handleChange={handleChange} />
    </>
  );
};

export default Returns;
