// REACT
import { useContext, useEffect } from "react";
import HeatMapContext from "../context";

// COLORS
import { colors } from "../../../../../../../utils/theme";

/**
 * Devuelve un objeto de mapa de calor con un color y una función onClick si la propiedad disabledHeat
 * es falsa; de lo contrario, devuelve un objeto de mapa de calor con un color predeterminado y una
 * función onClick vacía
 * @param id - La identificación del elemento al que desea agregar el mapa de calor.
 * @param disableHeat - booleano: si es verdadero, el mapa de calor se desactivará
 * @returns Una función que toma una identificación y deshabilita el calor y devuelve un objeto.
 */
const useHeatmap = (id, disableHeat) => {
  if (!disableHeat) {
    const heatmap = useContext(HeatMapContext);
    const heatmapDefault = {
      ...heatmap,
      color: heatmap.colorScales[id] ?? colors.heatMin[100],
      onClick: heatmap.onClick(id),
    };
    return heatmapDefault;
  }
  return { color: colors.heatMin[100], onClick: () => {} };
};

/**
 * Obtiene datos de la API, calcula el porcentaje del total para cada departamento y luego establece la
 * escala de colores para cada departamento en función de ese porcentaje.
 * @param setColorScales - una función que establece las escalas de color en el estado
 * @param countryID - El ID del país para el que se obtendrán los datos.
 * @param period - El período del año, que puede ser "T1", "T2", "T3" o "T4".
 * @param year - El año que se mostrará
 */
export const useHeatColors = (setColorScales, countryID, period, year) => {
  const setColor = (countryID, escala) => {
    if (countryID === "guatemala") {
      return `rgba(146,189,87, ${escala})`;
    } else {
      return `rgba(221,184,65, ${escala})`;
    }
  };
  useEffect(() => {
    if (period.length > 0 && year.length > 0) {
      fetch(
        `${
          import.meta.env.VITE_APP_API_URL
        }/consultas/totalpordepartamento/${countryID}?anio=${year}&inicio=${
          period[0]
        }&fin=${period[1]}`
      )
        .then((req) => req.json())
        .then((data) => {
          let total = 0;
          const totales = [];
          const filteredData = data.data.map((department) => {
            total += department.total;
            totales.push(department.total);
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
          const dataRange = 6 / filteredData.length;
          // const scaleRange = dataRange * 10;
          const higher = Math.max(...totales);

          filteredData.forEach((department) => {
            const percent = department.total / higher;
            const scale = Math.round((percent + Number.EPSILON) * 100) / 100;

            if (scale === 0) scales[department.id] = colors.heatMin[100];
            else scales[department.id] = setColor(countryID, scale);
          });

          setColorScales(scales);
        });
    }
  }, [countryID, period, year]);
};

export default useHeatmap;
