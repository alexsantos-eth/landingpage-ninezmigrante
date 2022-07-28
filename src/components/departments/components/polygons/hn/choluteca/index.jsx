import React from "react";
import useHeatmap from "../../../../../../pages/country/components/statistics/components/heatMap/hooks";

// CHAKRA
import { Tooltip } from "@chakra-ui/react";

const Atlantida = ({ customColor = "", disableHeat = false }) => {
  let { color, onClick } = useHeatmap("choluteca", disableHeat);
  color = customColor || color;

  return (
    <Tooltip label="Choluteca" placement="auto">
      <path
        onClick={onClick}
        fill={color}
        className="cls-1"
        d="m 215.25094,479.56213 0.7,0.26 0.48,0.65 0.73,0.1 0.42,1.94 -0.1,0.39 -0.54,0.16 -0.48,1.42 -0.41,0.13 -0.09,1.88 -0.35,0.55 -0.85,-0.45 -0.22,-2.04 -0.54,-1.45 0.67,-0.19 0.38,-0.9 0.19,-1.26 -0.32,-1.07 0.33,-0.12 z m 0.44,-38.45 -0.12,-0.88 -0.62,-0.88 0.64,-1.32 -0.01,-1.96 0.77,-0.77 -0.15,-0.57 0.42,-0.59 -0.59,-0.98 -0.12,-1.93 0.38,-0.43 1.55,-0.36 2.22,0.21 1.03,0.72 1.29,0.35 0.66,-0.47 1.54,0.1 -0.12,0.77 -0.73,0.64 -0.11,0.87 -0.52,0.47 -0.05,2.01 0.8,-0.12 0.1,0.81 0.94,1.26 0.91,0.54 0.9,0.06 0.23,1.61 3.49,-0.29 0.48,0.24 1.42,-0.54 1.57,0.74 0.08,0.37 1.92,0.17 3.27,-1.01 4.82,2.24 0,0 -1.3,6.02 2.72,0.19 0.56,1.39 0.4,0.09 0.81,1.02 -0.29,1.04 0.36,0.59 0.03,1.81 1.82,1.65 1.37,-0.49 1.66,0.67 3.65,-0.84 -0.42,2.36 0.76,0.91 0.13,1.37 0.67,0.69 1.93,0.78 0.24,-0.07 0.06,-0.93 1.59,1.01 1.22,-0.7 0.56,-1.44 1.2,-0.39 0.54,0.24 1.09,-0.22 0.12,-1.77 1.48,-0.81 0.38,-0.57 -0.18,-2.04 0.55,-0.68 1.52,-1.18 1.89,-0.04 0.5,-0.7 1.17,-0.58 2.11,-2.31 1.07,-2.12 -0.16,-0.99 0.3,-2.03 0.43,0.26 0.35,1 2.37,0.06 1.66,-0.7 -0.08,0.59 0.45,0.38 3.9,-1.86 1.28,-1.71 2.26,-0.11 0.7,0.82 0.83,0.06 0.31,-1.52 1.43,-1.85 0.51,0.64 0.61,-0.42 1.41,-0.08 0,0 -1.47,2.79 -0.15,1.49 0.65,0.7 2.71,1.07 0.48,0.65 -1.81,6.04 -0.1,1.3 0.14,0.34 1.82,0.88 0.61,1.39 0.96,8.44 1.37,3.08 0.37,2.07 -0.03,1.03 -2,2.63 -0.33,1.14 0.75,1.5 2.66,0.89 0.3,0.35 0.89,5.2 -0.23,2.88 -0.22,0.54 -3.88,2.83 -1.8,0.48 -7.18,-4.58 -1.09,0.1 -4.08,1.31 -0.68,0.65 -0.72,1.6 -3.54,2.15 0.3,1.17 -0.65,2.84 -0.61,0.74 -0.01,1.46 -1.43,2.41 0.05,1.34 1.17,2.93 -0.87,0.47 0.29,0.91 -1.13,1.47 1.7,3.7 -3.89,3.54 -0.9,3.29 -0.59,0.08 -1.37,1.15 -1.5,0.23 -2.47,1.81 -1.09,-0.4 -0.66,2.01 -0.43,0.24 -1.97,0.25 -2.04,-1.46 -2.12,-0.16 -4.27,0.03 -18.08,1.52 -3.16,-0.31 -0.29,-0.33 0.28,-0.52 -0.7,-0.29 1.01,-0.68 1.01,-1.71 2.35,-0.84 0.13,-0.19 -0.38,0.03 -3.71,0.61 -3.9,-2.55 -2.66,-4.33 1.62,-0.9 1.52,-0.29 1.33,-0.94 -0.13,-0.16 -0.22,0.16 -2.5,0.71 -0.25,-0.81 -1.3,0 -0.38,-0.48 -1.14,-0.35 -1.05,-0.74 -1.27,0.45 -0.6,-0.23 -0.51,-0.16 -1.43,-0.16 0,0.45 -0.41,0.1 0.25,-2.65 -0.35,-1.26 -0.16,-0.29 0,-1.62 -1.21,-3.59 -1.01,-2.2 -0.95,-1.1 0.19,-0.74 0.76,-0.52 1.08,0.1 -0.13,-0.74 -1.2,0.16 -0.13,0 -0.32,0.29 -2.22,-2.81 -1.14,-0.71 -0.51,-0.26 -1.77,-0.81 -0.95,0.29 -0.09,-0.9 0.38,-1.26 1.17,-1.46 1.01,0.13 0.63,-0.58 0.16,-0.23 0.35,0.06 0.41,0.74 0.79,2.46 0.76,0.26 0.76,-0.42 0.41,-1.45 0.7,-0.61 0.1,-0.87 0.89,-1.29 0.25,-0.13 0.63,0.74 0.48,0.03 0.63,-0.71 -0.25,-0.35 -0.03,0.39 -0.6,0.45 -0.73,-0.74 -0.56,-0.1 -0.23,-0.27 -0.25,-0.97 -0.22,-1.12 -0.7,0.26 -0.44,-0.68 0,-1.58 1.96,0.03 0.13,-0.23 0.92,0.62 0.73,0.03 1.65,-2.01 2.35,0.16 0.57,-0.91 -0.14,-0.98 0.33,-0.51 0,0 0.31,-0.22 -0.27,-0.37 0.27,-0.48 0.27,-0.19 0.68,0.28 1.93,-0.9 0.57,-2.02 0.65,-0.69 -0.13,-1.12 0.45,-0.35 -2.92,-4.35 -0.12,-1.17 0.57,-1.39 0.18,-2.3 -3.43,-1.61 -1.08,-1.18 -1.68,-3.26 0.34,-0.75 -0.53,-0.98 -1.42,-0.55 1.82,-5.29 -1.6,-1.19 -3.08,-1.47 -0.83,-1.61 z"
        title="Choluteca"
        id="HN-CH"
      />
    </Tooltip>
  );
};

export default Atlantida;