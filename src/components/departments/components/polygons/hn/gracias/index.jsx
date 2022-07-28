import React from "react";
import useHeatmap from "../../../../../../pages/country/components/statistics/components/heatMap/hooks";

// CHAKRA
import { Tooltip } from "@chakra-ui/react";

const Gracias = ({ customColor = "", disableHeat = false }) => {
  let { color, onClick } = useHeatmap("graciasadios", disableHeat);
  color = customColor || color;

  return (
    <Tooltip label="Gracias a Dios" placement="auto">
      <path
        onClick={onClick}
        fill={color}
        className="cls-1"
        d="m 601.38094,228.98213 0.84,0.68 1.97,0.58 0.44,2.74 1.58,3.82 -1.42,1.54 -0.47,-0.2 0.28,-1.7 -1.17,-2.06 0.19,-1.47 -1.39,-2.19 -1.08,-0.26 -0.28,-0.42 0.17,-0.94 0.34,-0.12 z m -104.23,-58.39 7.67,2.65 0.48,0.1 4.62,2.42 11.34,4.35 11.15,3.18 3.01,0.49 0.86,0.72 -0.76,0.23 -0.67,0.92 -0.47,3.44 -0.32,0.1 -0.22,0.69 0.06,0.85 0.95,2.39 1.9,1.67 1.87,-0.2 1.68,-1.18 0.16,-0.82 -0.73,-1.5 0,-0.56 0.54,-0.62 2.12,1.7 0.51,1.51 0.76,0.92 0.86,0.26 1.9,-0.46 0.7,0.39 -0.35,0.56 0.86,0.36 -0.22,-1.01 0.82,-0.13 1.14,0.1 0.54,-0.33 -0.41,-0.92 -0.63,-0.29 0.73,-0.52 -0.13,-0.46 1.05,-1.08 0.7,0.49 -0.73,0.36 -0.09,0.59 1.17,0 0.35,-0.39 -0.03,-0.72 1.11,0.26 -0.25,-0.98 0.35,-0.16 0,-0.72 -1.43,-0.26 -1.33,-0.98 0.19,-0.39 -0.29,-0.2 -12.35,-2.78 -1.27,-0.33 0.13,-0.2 21.98,4.58 6.81,0.66 9.79,0.36 1.36,1.57 0.45,-0.16 4.97,3.93 17.61,14.75 10.68,10.3 12.61,10.94 3.99,2.81 5.64,3.14 3.9,1.54 5.01,1.14 -1.42,2.19 -1.96,0.47 -5.92,-4.99 -2.88,-1.47 -2.88,-0.52 -2.72,-1.37 -2.19,0.33 -2.44,-0.52 -1.46,-1.37 1.52,0.29 -0.16,-1.37 -0.51,-1.04 -1.27,-1.24 -2.15,-1.24 -0.44,-1.5 -0.79,1.01 0.26,0.52 -1.27,0.16 0,-0.52 0.51,-0.06 -3.14,-0.88 -1.55,-1.5 -1.52,0.07 -1.33,-1.11 -0.35,0.29 -1.68,2.81 -1.39,0.92 -0.03,1.21 -1.36,-0.75 -0.57,0.43 -0.13,0.72 -0.76,0.56 -2.76,-0.16 0.32,1.5 1.49,1.73 0.16,1.37 -0.35,0.72 -1.17,0.59 -1.11,-0.72 -1.3,0.72 0.38,0.56 -0.19,0.13 1.24,1.05 -0.22,0.72 -0.98,0.16 -0.54,-0.33 0.13,1.11 2,3.69 2.38,2.78 2.41,1.01 2.88,-0.2 -0.13,0.65 0.41,-0.06 0.98,0.91 0.57,-0.03 0.89,-0.72 0,-1.6 -1.39,-2.42 0.13,-0.69 -1.08,-1.08 0.19,-1.44 2.79,-0.65 0.1,-0.16 0.22,-0.78 3.87,0.69 0.95,-0.13 1.2,0.43 1.17,0.59 1.45,1.35 2,0.94 1.65,1.86 2,0.65 2.15,2.42 1.9,1.01 2.09,-0.03 0.41,0.56 0.76,-0.33 0.98,1.7 1.2,0.91 1.4,0.52 -0.35,1.14 -2.03,1.01 -0.41,0.69 2.38,-0.03 1.33,-0.75 -0.13,-0.49 0.54,-0.13 -0.06,-0.59 0.28,-0.13 0,0.36 0.51,0.1 0.44,0.85 1.2,1.01 0.28,0.98 -0.28,0.36 0.16,1.18 -0.98,0.85 -0.19,0.82 1.17,2.58 -0.76,0.59 0.44,1.04 0.51,-0.46 0.16,-0.98 0.28,0.98 0.95,-0.06 -0.57,-0.46 0.22,-0.75 3.04,1.4 1.74,-0.78 0,-2.15 0.67,-1.47 0.51,-0.1 0.86,-0.88 2.31,-0.39 0.41,-1.14 1.01,0.07 1.27,-0.75 0.79,-1.44 -0.35,-0.59 -0.03,-1.4 1.87,-1.63 0.16,0.43 -0.38,0.65 0.25,0.46 1.24,-0.42 0.7,0.42 0.73,-0.29 1.49,0.58 0.63,-0.52 0.22,1.21 0.54,-0.33 1.65,0.33 0.44,-0.56 0.54,0.49 0.54,-0.23 0.41,0.62 0.35,-1.44 -0.51,-0.52 -1.93,0.42 -0.06,-1.47 -1.08,-0.26 -0.79,0.36 -1.11,-1.24 -0.38,0.29 -1.04,-0.03 -0.41,1.01 -1.61,0.52 -0.28,-1.01 -2.25,-0.62 -0.54,-1.01 -0.25,-0.16 -0.76,1.18 -0.47,-0.75 0.1,-0.49 -0.57,-0.85 -0.73,-0.39 -1.33,-0.82 -0.6,0.07 -1.3,-0.98 -3.42,-0.65 -0.41,-0.59 0.41,-1.38 0.63,-0.78 0.67,-0.16 0.54,-1.96 0.6,0.03 1.24,1.54 2.12,1.6 7.67,4.18 4.72,1.76 12.64,3.79 4.02,1.47 4.63,2.22 1.01,1.01 3.01,5.02 1.9,6.49 1.49,3.33 2.28,3.78 1.52,1.66 3.36,2.8 4.4,2.54 7.41,2.48 1.81,0.29 0.63,-0.33 0.25,0.33 -0.25,0.59 0.98,-0.2 0.13,0.23 -0.66,1.14 -1.56,-0.2 -0.21,-0.4 -2.22,0.65 -4.66,-0.38 -3.16,1.46 -1.87,-0.46 -2.39,0.08 -0.71,1.14 -0.37,-0.01 -1.01,-0.71 1.51,-1.32 0.1,-0.67 -0.28,-0.22 -2.54,0.5 -3.14,-1.51 -1.6,-0.38 -0.32,0.1 -0.24,1.46 -0.67,0.17 -1.24,-1.69 -1.23,-0.52 -1.36,-0.02 -0.92,-1.11 -0.86,-0.16 -0.28,0.54 0.11,1.65 -2.12,2.17 -1.69,0.06 -1.81,1.25 -1.42,0.3 -1.81,-1.4 0.03,-1.52 -0.95,-0.47 -0.69,0.13 -0.97,0.49 -0.8,0.95 -0.48,1.23 -1.26,-1.12 -0.33,0.41 0.16,1.24 0.53,1.02 -0.46,0.13 -1.36,-0.94 -0.43,0.77 0.04,0.64 1.11,2.08 -0.28,0.22 -1.41,-0.76 -0.28,0.18 0.84,1.43 -0.24,0.45 -1.32,-0.3 -0.46,0.27 -0.28,3.06 -1.09,-0.43 -1.43,0.52 -1.24,-0.76 -0.56,0.63 0.54,0.7 -0.1,0.32 -2.35,0.69 -0.01,0.5 0.54,0.65 -1.13,1.54 0.35,1.24 -0.42,0.22 -0.63,-0.61 0.06,-1.1 -0.4,-0.42 -1.55,-0.26 -0.78,-0.01 -0.6,0.54 -1.37,-0.07 -2.08,1.25 -0.86,-0.75 -0.41,0.08 0.11,1.51 -0.69,0.54 -0.92,0.08 -0.42,0.54 1.64,0.67 -0.33,0.82 0.13,0.6 -0.69,-0.01 -1.04,-0.75 -0.92,0.26 -1.19,-0.16 -0.37,0.18 0.63,0.83 0.08,0.82 -2.41,-0.91 -0.65,0.86 0.17,1.06 -0.24,0.59 -1.23,-0.2 -1.26,-1.26 -0.33,0.31 -0.02,1.14 -0.78,0.49 -2.27,-0.95 -0.51,0.27 0.13,0.37 2.54,1.6 -0.37,0.22 -1.99,-0.22 -2.12,0.38 -1.82,1.98 -1.37,-0.11 -1.57,0.71 -0.52,-1.88 -0.82,-0.24 -0.39,1.5 0.31,0.55 -1.06,0.4 -2.17,-1.54 -0.65,0.54 -1.46,-0.07 -0.23,0.32 0.93,2.21 -0.19,0.45 -0.91,-0.06 -1.13,-0.84 -0.55,-0.01 -2.9,1.23 -2.63,-1.09 -2.72,1.28 -1.87,-0.49 -0.55,-2.57 -0.41,-0.05 -2.9,1.46 -0.55,-0.1 -0.27,-0.32 0,-2.61 -0.27,-0.42 -1.37,-0.39 -1.65,0.16 -0.47,0.63 -0.06,0.96 1.32,3.18 0.84,0.64 0.08,1.79 -3.47,-0.42 -1.24,0.53 -0.74,0.9 -3.85,0.67 -2.96,-0.91 -1.44,-1.3 -1.13,-0.52 0.72,-2 -0.77,-0.6 -1.1,-0.11 -2.82,1.97 -0.47,0.63 -0.16,1.55 1.11,2.49 -0.35,1.87 0.9,0.84 -2.78,2.29 -2,-0.62 -0.45,-0.46 -0.34,-1.47 -0.68,-0.56 -0.87,0.31 -0.42,0.73 -0.69,0.22 -1.64,-0.16 -0.82,-0.42 -0.31,-0.37 0.01,-0.78 0.9,-1.86 -1.23,-0.29 -1.22,-0.89 -0.42,0.36 0.08,0.78 -1.12,1.31 -0.66,1.59 -2.88,2.75 -0.18,1.23 -2.64,1.34 -2.81,0.19 -0.95,1.72 -0.34,0.12 -3.3,-0.76 -0.89,-0.66 -0.14,-0.79 -0.45,-0.12 -1.17,0.51 -1.5,0.17 -0.28,-1.5 1.02,-0.32 0.53,-0.7 -0.14,-0.41 -3.34,0.37 -0.76,0.52 -1,-0.84 -1.43,0.39 -0.96,-0.88 -0.94,0.36 -1.9,-0.78 -1.99,-0.1 -0.55,-1.21 -2.52,0.53 -1.27,-0.69 -0.67,-0.72 0.12,-0.64 -0.63,-0.2 -1.69,3.05 -1.05,-0.09 -0.82,-3.16 -1.2,-0.28 -2.74,-2.4 -0.43,-1.66 0.54,-1.38 -0.36,-0.83 -1.36,0.66 -0.64,-0.16 -0.55,-0.79 0.69,-0.7 1.01,0.2 0.5,-0.71 -0.29,-1.05 -3.16,-2.03 -0.81,-1.17 -0.39,-1.84 -0.64,-0.16 -0.51,-0.79 -0.83,-0.01 -1.08,-0.65 -2.15,0.41 -2.45,1.49 -2.35,-0.37 -2.59,0.29 -2.63,4.2 -0.28,1.64 -3.71,0.78 -1.79,1.65 -1.22,0.31 -0.92,1.16 0,0 -0.13,-21.24 0.35,-18.22 0,0 -0.47,-107.1 0.11,-0.77 0.35,-0.12 0,0 -0.02,-0.09 z m 125.44,-170.1000008 0.44,0.43 -0.38,0.36 -2.19,0.3 1.43,-1.02 0.7,-0.07 z m -3.45,-0.17 0.32,0.83 0.73,0.2 0.03,0.3 -1.11,0.03 -0.57,0.46 -0.51,-0.26 -1.14,0.59 -0.16,-0.66 0.28,-0.59 1.14,0 0.28,-0.63 0.71,-0.27 z"
        title="Gracias a Dios"
        id="HN-GD"
      />
    </Tooltip>
  );
};

export default Gracias;