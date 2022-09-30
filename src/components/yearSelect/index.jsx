import React from "react";

// CHAKRA UI COMPONENTS
import { Select } from "@chakra-ui/react";
import { year } from "../../utils/year";

const YearSelect = ({ currentYear, handleYear, minWidth }) => {
  const years = Array.from({ length: year - 2019 }, (v, k) => k + 2020);

  return (
    <>
      <Select
        name="year"
        fontSize="2xl"
        lineHeight="1.8"
        fontWeight="600"
        fontFamily="Times"
        onChange={handleYear}
        letterSpacing="1.2px"
        bgColor="rgba(255,255,255,0.5)"
        minWidth={minWidth ?? { base: "100%", md: "40%" }}
        value={currentYear?.toString() || ""}
      >
        <option value="">Elegir año</option>
        {years.map((year) => (
          <option key={year} value={year?.toString()}>
            {year}
          </option>
        ))}
      </Select>
    </>
  );
};

export default YearSelect;
