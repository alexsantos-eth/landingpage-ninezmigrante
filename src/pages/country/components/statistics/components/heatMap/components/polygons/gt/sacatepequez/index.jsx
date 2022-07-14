import React from "react";
import useHeatmap from "../../../../hooks";

// CHAKRA
import { Tooltip } from "@chakra-ui/react";

const Sacatepequez = ({ customColor = "", disableHeat = false }) => {
  let { color, onClick } = useHeatmap("sacatepequez", disableHeat);
  color = customColor || color;

  return (
    <Tooltip label="Sacatepéquez" placement="auto">
      <path
        onClick={onClick}
        d="m 215.43741,447.21 0,0 1.7,-0.29 0.43,0.01 0.41,0.09 1.41,1.34 4.22,5.42 1.23,4.13 1.87,2.16 1.35,1.58 0.18,0.32 0.08,1.09 -0.76,2.63 0.28,1.69 -1.17,1.32 -0.73,1.76 -1.01,11.6 -1.21,5.42 -8.97,3.56 -1.55,-3.35 -0.21,-0.32 -0.53,-0.38 -0.94,0.28 -0.69,1.07 -0.81,0.5 -2.03,0 -1.21,0.68 -0.26,0.19 -0.32,0.3 -0.66,0.86 -0.69,1.27 -0.22,0.29 -0.94,1.08 -3.69,3.18 -0.67,-0.45 -0.88,-1.02 -1.74,-2.9 -1.07,-2.27 -0.09,-0.4 -0.14,-0.35 -1.13,-1.21 -4.11,-3.58 -0.05,-0.17 -0.08,-0.83 0.75,-3.97 3.03,-5.85 6.3,-7.03 3.53,-2.57 1.86,-4.05 0.84,-1.06 0.41,-0.71 0.04,-0.65 -0.04,-0.88 -0.43,-2.57 -0.46,-1.37 -0.78,-4.18 0.41,-1.81 2.18,-4 3.26,2.97 1.84,1.09 1.33,0.29 1.33,0.05 z"
        title="Sacatepéquez"
        className="cls-1"
        fill={color}
        id="GT-SA"
      />
    </Tooltip>
  );
};

export default Sacatepequez;
