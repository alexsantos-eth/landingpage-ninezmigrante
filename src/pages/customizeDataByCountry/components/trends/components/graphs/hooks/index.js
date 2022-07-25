import { useState, useEffect } from "react";

// REACT ROUTER DOM
import { useParams } from "react-router-dom";

//UTILS
import { getCurrentQuarter, year } from "../../../../../../../utils/year";
import { quarterId } from "../../../../../../../hooks/fetch";
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

      if (period === "0") {
        barLengths = 3;
        for (let i = 0; i < barLengths; i++) {
          localData.push({
            id: `q${i + 1}`,
            year,
            name: `Cuatrimestre ${i + 1} - ${year}`,
          });
        }
      }
      if (period === "1") {
        barLengths = 4;
        let currentQuarter = getCurrentQuarter();

        while (currentQuarter > 0 && localData.length < 4) {
          localData.push({
            id: `q${currentQuarter}`,
            year: currentYear,
            name: `Cuatrimestre ${currentQuarter} - ${currentYear}`,
          });

          currentQuarter--;
          if (currentQuarter === 0 && currentYear !== year - 1) {
            currentQuarter = 3;
            currentYear--;
          }
        }
      }
      if (period === "2") {
        barLengths = 3;
        while (currentYear > year - 3) {
          localData.push({
            id: `q1`,
            year: currentYear,
            name: `Cuatrimestre 1`,
          });
          localData.push({
            id: `q2`,
            year: currentYear,
            name: `Cuatrimestre 2`,
          });
          localData.push({
            id: `q3`,
            year: currentYear,
            name: `Cuatrimestre 3`,
          });
          currentYear--;
        }
      }

      // PETICIONES
      const requests = localData.map(async (label) => {
        const req = await fetch(
          `${import.meta.env.VITE_APP_API_URL}/consultas/${
            endpoints[graphType]
          }/${countryID}/${label.year}/${quarterId[label.id]}`
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

          // AGRUPAR POR AÑOS
          if (period === "2") {
            let currentYear = year;

            data.forEach((totals) => {
              const nextTotal1 = totals.total1;
              const nextTotal2 = totals.total2;
              const nextTotal3 = totals.total3;

              if (totals.year === currentYear) {
                if (totals.id === "q1") {
                  data[year - currentYear].total1 = 0;
                  data[year - currentYear].total2 = 0;
                  data[year - currentYear].total3 = 0;
                }
                data[year - currentYear].total1 += nextTotal1;
                data[year - currentYear].total2 += nextTotal2;
                data[year - currentYear].total3 += nextTotal3;
                data[year - currentYear].year = currentYear;
                data[year - currentYear].name = `Año ${currentYear}`;
              }

              if (totals.id === "q3") currentYear--;
            });

            data.length = 3;
            data = data.reverse();
          }

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
