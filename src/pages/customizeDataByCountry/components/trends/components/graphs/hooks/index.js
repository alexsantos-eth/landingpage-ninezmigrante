import { useState, useEffect } from "react";

// REACT ROUTER DOM
import { useParams } from "react-router-dom";

//UTILS
import { month, year } from "../../../../../../../utils/year";
import { monthNames } from "../../../../../../../hooks/fetch";
import { itemColors } from "../utils";

const endpoints = {
  gender: "totalporgenero",
  age: "totalporrangoetario",
  via: "totalporviaderetorno",
  condition: "totalporcondiciondeviaje",
  return: "totalporpaisdeproveniencia",
};

const datasetLabels = {
  gender: ["Femenino", "Masculino"],
  age: ["Primera infancia", "Niñez", "Adolescencia"],
  via: ["Terrestre", "Aérea"],
  condition: ["Acompañado", "No acompañado"],
  return: ["Estados Unidos", "México", "Canada"],
};

/**
 * Toma tres parámetros, realiza una solicitud a una API y devuelve los datos en un formato que puede
 * ser utilizado por una biblioteca de gráficos.
 * @param period - "0" | "1" | "2"
 * @param graphType - "género", "vía", "condición", "retorno", "edad"
 * @param chartType - "bar"
 * @returns Un objeto con dos propiedades: etiquetas y conjuntos de datos.
 */
const useGraphData = (period, graphType, chartType) => {
  const countryID = useParams().countryID;
  const [graphData, setGraphData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    if (period.length && graphType.length && chartType.length) {
      // CALCULAR TOTAL DE PERIODOS
      let barLengths = 0;
      let currentYear = year;
      let localData = [];

      // UTIMO AÑO
      if (period === "0") {
        barLengths = 3;
        localData.push({
          ranges: [1, 12],
          year,
          name: `Enero - Diciembre - ${year}`,
        });
      }

      // ULTIMOS 4 MESES
      if (period === "1") {
        barLengths = 4;

        if (month >= 5) {
          localData.push({
            ranges: [month - 4, month - 1],
            year: currentYear,
            name: `${monthNames[month - 4]} - ${
              monthNames[month - 1]
            } - ${currentYear}`,
          });
        } else {
          const startDiff = 5 - month;

          localData.push({
            ranges: [1, month],
            year: currentYear,
            name: `${monthNames[1]} - ${monthNames[month]} - ${currentYear}`,
          });

          if (startDiff > 1) {
            localData.push({
              ranges: [12 - startDiff, 12],
              year: currentYear - 1,
              name: `${monthNames[12 - startDiff]} - ${monthNames[12]} - ${
                currentYear - 1
              }`,
            });
          }
        }
      }

      // ULTIMOS 3 AÑOS
      if (period === "2") {
        barLengths = 3;
        localData.push({
          ranges: [1, 12],
          year: currentYear,
          name: `${currentYear}`,
        });
        localData.push({
          ranges: [1, 12],
          year: currentYear - 1,
          name: `${currentYear - 1}`,
        });
        localData.push({
          ranges: [1, 12],
          year: currentYear - 2,
          name: `${currentYear - 2}`,
        });
      }

      // PETICIONES
      const requests = localData.map(async (label) => {
        const req = await fetch(
          `${import.meta.env.VITE_APP_API_URL}/consultas/${
            endpoints[graphType]
          }/${countryID}?anio=${label.year}&inicio=${label.ranges[0]}&fin=${
            label.ranges[1]
          }`
        );
        const data = await req.json();
        let totals = { total1: 0, total2: 0, total3: 0 };

        data?.data.forEach((stats) => {
          if (graphType === "gender") {
            if (stats._id === "Femenino") totals.total1 += stats.total;
            if (stats._id === "Masculino") totals.total2 += stats.total;
          }

          if (graphType === "via") {
            if (stats._id.startsWith("Terrestre")) totals.total1 += stats.total;
            if (stats._id.startsWith("Aérea")) totals.total2 += stats.total;
          }

          if (graphType === "condition") {
            if (stats._id.condicion === "Acompañado")
              totals.total1 += stats.total;
            if (stats._id.condicion === "No acompañado")
              totals.total2 += stats.total;
          }

          if (graphType === "return") {
            if (stats._id?.nombre === "Estados Unidos")
              totals.total1 += stats.total;
            if (stats._id?.nombre === "México") totals.total2 += stats.total;
            if (stats._id?.nombre === "Canadá") totals.total3 += stats.total;
          }

          if (graphType === "age") {
            if (stats._id === "0-6 años") totals.total1 += stats.total;
            if (stats._id === "7-12 años") totals.total2 += stats.total;
            if (stats._id === "13-17 años") totals.total3 += stats.total;
          }
        });

        return { ...label, ...totals };
      });

      // RESOLVER
      Promise.allSettled(requests)
        .then((res) => {
          let data = res.map((r) => r.value);

          // REVERSE PARA PERIODO 1
          if (period === "1") data = data.reverse();

          const newGraphData = {
            labels: data.map((totals) => totals.name),
            datasets: [
              {
                fill: true,
                label: datasetLabels[graphType][0],
                data: data.map((totals) => totals.total1),
                backgroundColor: itemColors[0],
              },
              {
                fill: true,
                label: datasetLabels[graphType][1],
                data: data.map((totals) => totals.total2),
                backgroundColor: itemColors[1],
              },
              {
                fill: true,
                label: datasetLabels[graphType][2],
                data: data.map((totals) => totals.total3),
                backgroundColor: itemColors[2],
              },
            ].flat(Boolean),
          };
          setGraphData(newGraphData);
        })
        .catch((err) => console.log(err));
    }
  }, [period, graphType, chartType]);

  return graphData;
};

export default useGraphData;
