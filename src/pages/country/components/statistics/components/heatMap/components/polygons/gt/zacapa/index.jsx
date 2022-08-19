import React from "react";
import useHeatmap from "../../../../hooks";

// CHAKRA
import { Tooltip } from "@chakra-ui/react";

const Zacapa = () => {
  const { color, onClick } = useHeatmap("zacapa");

  return (
    <Tooltip label="Zacapa" placement="auto">
      <path
        onClick={onClick}
        d="m 433.90741,400.36 0,0 -1.93,1.6 -1.68,2.61 -2.21,6.68 2.73,2.56 -0.01,3.81 -1.73,4.11 -1.08,1.53 -0.04,-0.11 -0.44,-0.99 -0.2,-0.33 -0.14,-0.33 -0.18,-0.33 -0.41,-1.01 -0.54,-1 -0.21,-0.31 -0.23,-0.26 -0.25,-0.23 -0.26,-0.19 -0.36,-0.15 -0.74,0.11 -1.06,0.31 -3.09,1.58 -0.94,0.65 -0.57,0.55 -0.72,1.1 -0.65,0.74 -0.86,0.7 -1.66,0.55 -1.05,0.05 -0.9,-0.62 -0.56,-0.74 -2.19,-0.69 -6.89,2.34 -2.28,0 -1.93,-1.32 -3.06,-0.93 -1.15,-0.03 -2.71,0.78 -8.44,6.81 -2.13,0.52 -7.49,-0.14 -2.06,-0.48 -4.48,-2.2 -4.75,-2.45 -1.64,-0.21 -2.4,1.85 -3.19,3.04 -0.19,0.72 0.43,3.54 -0.56,2.38 -3.31,6 -1.59,-0.45 -2.23,-0.34 -3.74,0 -0.45,-0.06 -0.81,-0.93 -1.16,-1.65 -2.22,-4.29 -1.3,-1.84 -0.83,-1.48 -0.4,-0.53 1.08,-2.41 3.13,-3.55 1.76,-0.78 3,-0.09 0.68,-0.12 0.56,-0.24 0.28,-0.68 0.29,-2.86 -0.34,-0.46 -0.71,-0.44 -1.79,-0.25 -1.71,-0.91 -1.11,-1.59 -6.15,-8.5 -0.38,-0.69 -0.13,-0.57 0.56,-0.22 0.67,-0.09 6.76,-0.14 -0.14,-1.95 -6.22,-9.44 -5.16,-7.44 3.84,-1.72 1.45,-0.21 3.23,0.12 4.89,1.88 1.65,0.35 8.89,-1.36 4.47,0.3 9.67,-2.26 5.71,-0.68 2.08,-0.46 16.56,-5.6 16.36,-6.63 3.65,-2.74 2.02,-1.01 3.25,-0.7 4.28,0.42 1.4,0.34 3.25,1.78 0.4,0.27 0.45,0.39 0.69,0.75 0.33,0.5 0.23,0.45 0.1,0.4 0.07,0.93 -0.31,3.63 -0.16,0.94 -0.13,0.33 -0.34,0.64 -0.24,0.3 -0.25,0.22 -0.57,0.41 -1.75,0.7 -0.15,0.59 0.01,0.96 1.09,4.6 0.05,0.9 -0.09,1.39 0.21,2.28 0.83,4.08 0.28,0.81 2.72,3.29 0.61,0.44 1.01,0.45 0.38,0.3 0.07,0.05 z"
        className="cls-1"
        title="Zacapa"
        fill={color}
        id="GT-ZA"
      />
    </Tooltip>
  );
};

export default Zacapa;