// REACT
import { useEffect } from "react";

/**
 * Obtiene datos de una API, los filtra, los ordena y los establece en un estado
 * @param setData - la función que establece los datos en el componente
 * @param countryID - El ID del país del que desea obtener los datos.
 * @param period - el período del año (trimestre)
 * @param year - El año a consultar
 * @param list - "asc" o "desc" o "predeterminado"
 */
export const useSortedDepartments = (
  setData,
  countryID,
  period,
  year,
  list
) => {
  useEffect(() => {
    if (period?.length > 0 && year?.length > 0) {
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
          let filteredData = data.data.map((department) => {
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
          if (list === "asc" || list === "default" || list?.length === 0) {
            filteredData = filteredData.sort((a, b) => {
              return b.total - a.total;
            });
          }
          if (list === "desc") {
            filteredData = filteredData.sort((a, b) => {
              return a.total - b.total;
            });
          }
          if (filteredData.length > 5) {
            filteredData.length = 5;
          }
          setData(filteredData);
        });
    }
  }, [countryID, period, year, list]);
};

export default useSortedDepartments;
