// REACT
import { useEffect } from "react";
import { quarterId } from "../../../../../../../hooks/fetch";

export const useSortedDepartments = (setData, countryID, period, year, list) => {
  useEffect(() => {
    if (period?.length > 0 && year?.length > 0) {
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
            if(list === "asc"){
                filteredData = filteredData.sort((a, b) => {
                return b.total - a.total;
                });
            }
            if(list === "desc"){
                filteredData = filteredData.sort((a, b) => {
                return a.total - b.total;
                });
            }
            setData(filteredData);
        });
    }
  }, [countryID, period, year, list]);
};

export default useSortedDepartments;
