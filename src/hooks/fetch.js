import { useEffect } from "react";

export const quarters = {
  q1: "Primer cuatrimestre",
  q2: "Segundo cuatrimestre",
  q3: "Tercer cuatrimestre",
};

const useFetch = ({
  url,
  year = "",
  period = "",
  country = "",
  department = "",
  resolve = () => {},
}) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // FETCH
  const fetch = async () => {
    // CARGANDO
    setLoading(true);

    try {
      // RESPUESTA COMO JSON
      const response = await fetch(
        `${import.meta.env.VITE_APP_API_URL}${url}`
          .replaceAll("country", country)
          .replaceAll("year", year)
          .replaceAll("department", encodeURI(department))
          .replaceAll("quarter", encodeURI(quarters[period]))
      );
      const json = await response.json();
      resolve(json);
    } catch (error) {
      console.log(error);
      setError(error);
    }

    // CARGA FINALIZADA
    setLoading(false);
  };

  // EJECUTAR FETCH CUANDO EL COMPONENTE SE CARGA
  useEffect(() => {
    fetch();
  }, [period, year, country, department]);

  return { loading, error };
};

export default useFetch;
