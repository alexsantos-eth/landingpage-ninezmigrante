import { createContext } from "react";

const defContext = {
  onClick: () => () => {},
  colorScales: {},
};

const HeatMapContext = createContext(defContext);
export default HeatMapContext;
