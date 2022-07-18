import React, { useState, useEffect } from "react";

// REACT ROUTER DOM
import { useParams } from "react-router-dom";

// CHACKRA
import { Select, Text, Image, Stack, Box } from "@chakra-ui/react";

import {
  getListStyle,
  getItemStyle,
  getDataItemStyle,
} from "../../../department/components/dndDepartment/tools";

// DND
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import { Bar, Line } from "react-chartjs-2";
import FamilyIcon from "../../../../../../assets/family.png";
import GenderIcon from "../../../../../../assets/male.png";
import GroupIcon from "../../../../../../assets/group.png";
import BusIcon from "../../../../../../assets/bus.png";
import UsaIcon from "../../../../../../assets/usa.svg";
import { colors } from "../../../../../../utils/theme";
import { getCurrentQuarter, year } from "../../../../../../utils/year";
import { quarterId } from "../../../../../../hooks/fetch";

import {
  Chart as ChartJS,
  PointElement,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  Legend,
  Tooltip,
  Filler,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Legend,
  Tooltip,
  PointElement,
  LineElement,
  Filler
);

const graphDataTypes = {
  condition: "Condicion de Viaje",
  return: "Pais de Retorno",
  via: "Via de Retorno",
  age: "Rango Etario",
  gender: "Género",
};

const customPeriods = ["Año en curso", "Ultimos 4 periodos", "Ultimos 3 años"];
const customDataTypes = [
  {
    id: "gender",
    Content: <Image src={GenderIcon} height={30} />,
  },
  {
    id: "via",
    Content: <Image src={BusIcon} height={30} />,
  },
  {
    id: "condition",
    Content: <Image src={FamilyIcon} height={30} />,
  },
  {
    id: "return",
    Content: <Image src={UsaIcon} height={30} />,
  },
  {
    id: "age",
    Content: <Image src={GroupIcon} height={30} />,
  },
];
const customDataChart = [
  {
    id: "bar",
    Content: <Text>Barras</Text>,
  },
  {
    id: "area",
    Content: <Text>Area</Text>,
  },
  {
    id: "group",
    Content: <Text>Agrupado</Text>,
  },
];

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

const TrendsGraphs = ({ country }) => {
  const countryID = useParams().countryID || country;
  const [period, setPeriod] = useState("");
  const [graphType, setGraphType] = useState("gender");
  const [chartType, setChartType] = useState("bar");
  const [graphData, setGraphData] = useState({
    labels: [],
    datasets: [],
  });

  // PERIOD
  const handlePeriod = (ev) => setPeriod(ev.target.value);

  // DATA GRAPH
  const handleGraphType = (result) => {
    if (!result.destination) return;
    if (result.source.droppableId === "droppableGraphs")
      setGraphType(result.draggableId);
    else setChartType(result.draggableId);
  };

  useEffect(() => {
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
        }

        const newGraphData = {
          labels: data.map((totals) => totals.name),
          datasets: [
            {
              fill: true,
              label: datasetLabels[graphType][0],
              data: data.map((totals) => totals.total1),
              backgroundColor: colors.blue[700],
            },
            {
              fill: true,
              label: datasetLabels[graphType][1],
              data: data.map((totals) => totals.total2),
              backgroundColor: colors.red[700],
            },
            {
              fill: true,
              label: datasetLabels[graphType][2],
              data: data.map((totals) => totals.total3),
              backgroundColor: colors.heat[800],
            },
          ].flat(Boolean),
        };
        setGraphData(newGraphData);
      })
      .catch((err) => console.log(err));
  }, [period, graphType]);

  return (
    <div style={{ maxWidth: 800, margin: "0 auto" }}>
      <DragDropContext onDragEnd={handleGraphType}>
        <Stack spacing={1} direction="row" alignItems="center">
          {/* PERIODO */}
          <Select
            value={period || "default"}
            fontSize="2xl"
            lineHeight="1.8"
            fontWeight="600"
            fontFamily="Times"
            letterSpacing="1.2px"
            onChange={handlePeriod}
            bgColor="rgba(255,255,255,0.5)"
            maxW={"270px"}
          >
            <option value="default">Tendencias</option>
            {customPeriods.map((period, index) => (
              <option key={index} value={index}>
                {period}
              </option>
            ))}
          </Select>

          {/* LISTA DE DEPARTAMENTOS */}
          <Box>
            <Droppable droppableId="droppableGraphs" direction="horizontal">
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  style={{
                    ...getListStyle(snapshot.isDraggingOver),
                    paddingRight: 0,
                  }}
                  {...provided.droppableProps}
                >
                  {customDataTypes.map((item, index) => (
                    <Draggable
                      key={item.id}
                      index={index}
                      draggableId={item.id}
                    >
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={{
                            ...getItemStyle(
                              snapshot.isDragging,
                              provided.draggableProps.style
                            ),
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            marginRight: index === 4 ? "0" : "8px",
                          }}
                        >
                          <Box
                            style={{ filter: "brightness(0) saturate(100%)" }}
                          >
                            {item.Content}
                          </Box>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </Box>
          <Box>
            <Droppable droppableId="droppableCharts" direction="horizontal">
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  style={{
                    ...getListStyle(snapshot.isDraggingOver),
                    paddingRight: 0,
                  }}
                  {...provided.droppableProps}
                >
                  {customDataChart.map((item, index) => (
                    <Draggable
                      key={item.id}
                      index={index}
                      draggableId={item.id}
                    >
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={{
                            ...getItemStyle(
                              snapshot.isDragging,
                              provided.draggableProps.style
                            ),
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            marginRight: index === 2 ? "0" : "8px",
                          }}
                        >
                          <Box
                            style={{ filter: "brightness(0) saturate(100%)" }}
                          >
                            {item.Content}
                          </Box>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </Box>
        </Stack>

        {/* TITULO DE CANVAS */}
        <Stack
          marginY={8}
          spacing="16px"
          direction="column"
          alignItems="center"
        >
          <Text
            fontSize="2xl"
            fontFamily="Oswald"
            lineHeight={{ base: "1.5", md: "1" }}
            textAlign={{ base: "center", md: "left" }}
          >{`TOTAL DE NIÑEZ Y ADOLESCENCIA RETORNADA - ${countryID.toUpperCase()}`}</Text>
          <Text
            fontSize="2xl"
            lineHeight="1"
            fontWeight="600"
            fontFamily="Times"
          >{`${customPeriods[period] ?? "Tendencias"} - Por ${
            graphDataTypes[graphType] ?? ""
          }`}</Text>
        </Stack>

        <Box>
          <Droppable droppableId="droppableData1">
            {(provided, snapshot) => {
              return (
                <div
                  ref={provided.innerRef}
                  style={{
                    ...getDataItemStyle(snapshot.isDraggingOver),
                    width: "100%",
                    height: 300,
                  }}
                  {...provided.droppableProps}
                >
                  <Box>
                    {(chartType === "bar" || chartType === "group") && (
                      <Bar
                        width={800}
                        height={300}
                        options={{
                          responsive: true,
                          plugins: {
                            legend: {
                              display: false,
                            },
                          },
                          scales:
                            chartType === "group"
                              ? {
                                  x: {
                                    stacked: true,
                                  },
                                  y: {
                                    stacked: true,
                                  },
                                }
                              : undefined,
                        }}
                        data={graphData}
                      />
                    )}
                    {chartType === "area" && (
                      <Line
                        width={800}
                        height={300}
                        options={{
                          responsive: true,
                          plugins: {
                            legend: {
                              display: false,
                            },
                          },
                        }}
                        data={graphData}
                      />
                    )}
                  </Box>
                  {provided.placeholder}
                </div>
              );
            }}
          </Droppable>
        </Box>
      </DragDropContext>
    </div>
  );
};

export default TrendsGraphs;
