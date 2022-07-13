// REACT
import { useContext, useEffect } from "react";
import HeatMapContext from "../context";
import { quarterId } from "../../../../../../../hooks/fetch";

// COLORS
import { colors } from "../../../../../../../utils/theme";

const useHeatmap = (id) => {
  const heatmap = useContext(HeatMapContext);
  const heatmapDefault = {
    ...heatmap,
    color: heatmap.colorScales[id] ?? colors.heatMin[100],
    onClick: heatmap.onClick(id),
  };
  return heatmapDefault;
};

export const useHeatColors = (setColorScales, countryID, period, year) => {
  useEffect(() => {
    if (period.length > 0 && year.length > 0) {
      fetch(
        `${
          import.meta.env.VITE_APP_API_URL
        }/consultas/totalpordepartamento/${countryID}/${year}/${encodeURI(
          quarterId[period]
        )}`
      )
        .then((req) => req.json())
        .then((data) => {
          let total = 0;
          const filteredData = data.data.map((department) => {
            total += department.total;

            const dep = {
              ...department,
              id: department._id
                .toLowerCase()
                .replaceAll(" ", "")
                .replaceAll("department", "")
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, ""),
            };
            return dep;
          });

          const scales = {};
          const dataRange = 10 / filteredData.length;
          const scaleRange = dataRange * 10;

          filteredData.forEach((department) => {
            const percent = department.total / total;
            const scale = Math.min(
              Math.ceil(
                Math.ceil((percent * 100) / scaleRange) * percent * 10
              ) * 100,
              900
            );

            if (scale === 0) scales[department.id] = colors.heatMin[100];
            else scales[department.id] = colors.heat[scale];
          });
          setColorScales(scales);
        });
    }
  }, [countryID, period, year]);
};

export default useHeatmap;
