import { useEffect, useState } from "react";

/* Una constante que se utiliza para traducir la identificación del trimestre a un nombre de trimestre. */
export const quarters = {
  q1: "Primer cuatrimestre",
  q2: "Segundo cuatrimestre",
  q3: "Tercer cuatrimestre",
};

export const quarterId = {
  q1: "enero - abril",
  q2: "mayo - agosto",
  q3: "septiembre - diciembre",
};

export const monthNames = [
  "",
  "ENERO",
  "FEBRERO",
  "MARZO",
  "ABRIL",
  "MAYO",
  "JUNIO",
  "JULIO",
  "AGOSTO",
  "SEPTIEMBRE",
  "OCTUBRE",
  "NOVIEMBRE",
  "DICIEMBRE",
];

/**
 * Obtiene datos de una API y devuelve un estado de carga y un estado de error
 * @returns un objeto con dos propiedades: carga y error.
 */
const useFetch = ({
  url = "",
  year = "",
  periodStart = 0,
  periodEnd = 0,
  country = "",
  department = "",
  disableFetch = false,
  resolve = () => {},
}) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // EJECUTAR FETCH CUANDO EL COMPONENTE SE CARGA
  useEffect(() => {
    if (!disableFetch) {
      if (year.length === 0 && url.includes("selectedYear")) return;
      if (periodStart === 0 && url.includes("periodRange")) return;
      if (periodEnd === 0 && url.includes("periodRange")) return;
      if (country.length === 0 && url.includes("country")) return;
      if (department.length === 0 && url.includes("department")) return;

      // FETCH
      const getData = async () => {
        // CARGANDO
        setLoading(true);

        try {
          // RESPUESTA COMO JSON
          if (url.length) {
            const response = await fetch(
              `${import.meta.env.VITE_APP_API_URL}${url}`
                .replaceAll("country", country)
                .replaceAll("selectedYear", year)
                .replaceAll("department", encodeURI(department))
                .replaceAll(
                  "periodRange",
                  encodeURI(`inicio=${periodStart}&fin=${periodEnd}`)
                )
            );
            const json = await response.json();
            resolve(json);
          }
        } catch (error) {
          console.log(error);
          setError(error);
        }

        // CARGA FINALIZADA
        setLoading(false);
      };

      getData();
    }
  }, [url, year, periodStart, periodEnd, country, department, disableFetch]);

  return { loading, error };
};

export default useFetch;
