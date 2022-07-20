import React, { useState, useEffect } from "react";

// REACT ROUTER DOM
import { useParams } from "react-router-dom";

// CHACKRA
import {
  Select,
  Text,
  Image,
  Stack,
  Box,
  Tooltip as ChackraTooltip,
} from "@chakra-ui/react";

// DND
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import { Bar, Line } from "react-chartjs-2";

// ASSETS
import MaleIcon from "../../../../../../assets/male.png";
import FemaleIcon from "../../../../../../assets/femenine.png";
import Airplane from "../../../../../../assets/airplane.png";
import BusIcon from "../../../../../../assets/bus.png";
import FamilyIcon from "../../../../../../assets/family.png";
import GroupIcon from "../../../../../../assets/group.png";

import MexIcon from "../../../../../../assets/mexico.svg";
import UsaIcon from "../../../../../../assets/usa.svg";
import { colors } from "../../../../../../utils/theme";

//UTILS
import { getCurrentQuarter, year } from "../../../../../../utils/year";
import { quarterId } from "../../../../../../hooks/fetch";
import {
  getListStyle,
  getItemStyle,
  getDataItemStyle,
} from "../../../department/components/dndDepartment/tools";

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

const itemColors = [colors.blue[700], colors.red[700], colors.heat[800]];

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
    name: "Género",
    Content: (
      <Stack
        height="100%"
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ filter: "brightness(0) saturate(100%)" }}
      >
        <Image src={MaleIcon} height="23px" />
        <Image src={FemaleIcon} height="23px" />
      </Stack>
    ),
  },
  {
    id: "via",
    name: "Via de retorno",
    Content: (
      <Stack
        height="100%"
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ filter: "brightness(0) saturate(100%)" }}
      >
        <Image src={BusIcon} height="23px" />
        <Image src={Airplane} height="23px" />
      </Stack>
    ),
  },
  {
    id: "condition",
    name: "Condicion de viaje",
    Content: (
      <Stack
        height="100%"
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ filter: "brightness(0) saturate(100%)" }}
      >
        <Image src={FamilyIcon} height="23px" />
        <Image src={GroupIcon} height="23px" />
      </Stack>
    ),
  },
  {
    id: "return",
    name: "Pais de retorno",
    Content: (
      <Stack
        height="100%"
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ filter: "brightness(0) saturate(100%)" }}
      >
        <Image src={UsaIcon} height="23px" />
        <Image src={MexIcon} height="23px" />
      </Stack>
    ),
  },
  {
    id: "age",
    name: "Rango etario",
    Content: (
      <Stack
        height="100%"
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ filter: "brightness(0) saturate(100%)" }}
      >
        <Image src={GroupIcon} height="23px" />
      </Stack>
    ),
  },
];

const customDataChart = [
  {
    id: "bar",
    name: "Barras",
    Content: <Text>Barras</Text>,
  },
  {
    id: "area",
    name: "Área",
    Content: <Text>Area</Text>,
  },
  {
    id: "group",
    name: "Agrupado",
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

  const [graphType, setGraphType] = useState("");
  const [chartType, setChartType] = useState("");
  const [period, setPeriod] = useState("");

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

  return (
    <Box
      paddingBottom="40px"
      style={{ margin: "0 auto" }}
      maxWidth={{ base: "100%", md: 800 }}
      paddingLeft={{ base: "40px", md: 0 }}
      paddingRight={{ base: "40px", md: 0 }}
    >
      <DragDropContext onDragEnd={handleGraphType}>
        <Stack
          spacing={1}
          direction={{ base: "column", md: "row" }}
          alignItems="center"
          justifyContent="space-between"
        >
          {/* PERIODO */}
          <Select
            fontSize="2xl"
            maxW={"270px"}
            fontWeight="600"
            lineHeight="1.8"
            bgColor="#bcd6d6"
            fontFamily="Times"
            letterSpacing="1.2px"
            onChange={handlePeriod}
            value={period || "default"}
          >
            <option value="default">Tendencias</option>
            {customPeriods.map((period, index) => (
              <option key={index} value={index}>
                {period}
              </option>
            ))}
          </Select>

          <Stack
            spacing={1}
            direction={{ base: "column", md: "row" }}
            alignItems="center"
          >
            {/* LISTA DE VARIABLES */}
            <Box p={1}>
              <Text fontFamily="Oswald" fontSize="1em" mb={2}>
                Tipo de datos
              </Text>
              <Droppable droppableId="droppableGraphs" direction="horizontal">
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    style={{
                      ...getListStyle(snapshot.isDraggingOver),
                      padding: 0,
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
                              filter:
                                graphType === item.id
                                  ? "invert(21%) sepia(96%) saturate(1831%) hue-rotate(354deg) brightness(93%) contrast(89%)"
                                  : "none",
                              marginRight: index === 4 ? "0" : "8px",
                            }}
                          >
                            <ChackraTooltip label={item.name} placement="auto">
                              {item.Content}
                            </ChackraTooltip>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </Box>

            {/* LISTA DE TIPOS */}
            <Box
              p={1}
              pl={{ base: 0, md: 2 }}
              borderLeft={{ base: "none", md: "1px solid #555" }}
            >
              <Text fontFamily="Oswald" fontSize="1em" mb={2}>
                Tipo de grafica
              </Text>
              <Droppable droppableId="droppableCharts" direction="horizontal">
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    style={{
                      ...getListStyle(snapshot.isDraggingOver),
                      padding: 0,
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
                              filter:
                                chartType === item.id
                                  ? "invert(46%) sepia(74%) saturate(353%) hue-rotate(154deg) brightness(86%) contrast(102%)"
                                  : "none",
                            }}
                          >
                            <ChackraTooltip label={item.name} placement="auto">
                              {item.Content}
                            </ChackraTooltip>
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
        </Stack>

        {/* TITULO DE CANVAS */}
        <Box bgColor="#fff" borderRadius="20px" p={8} mt={4}>
          <Stack
            marginY={8}
            spacing={8}
            direction="row"
            alignItems="center"
            justifyContent="center"
          >
            <Stack spacing="16px" direction="column" alignItems="center">
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
              >{`Tendencias - Por ${graphDataTypes[graphType] ?? ""}`}</Text>
            </Stack>

            <Stack direction="column">
              {datasetLabels[graphType]?.map((label, index) => (
                <Stack direction="row" alignItems="center" key={label}>
                  <Box bgColor={itemColors[index]} width="18px" height="18px" />
                  <Text fontFamily="Oswald" fontSize="md">
                    {label}
                  </Text>
                </Stack>
              ))}
            </Stack>
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
                      {(chartType === "bar" ||
                        chartType === "group" ||
                        chartType === "") && (
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
                            scales: {
                              x: {
                                stacked: chartType === "group",
                              },
                              y: {
                                stacked: chartType === "group",
                              },
                            },
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
        </Box>
      </DragDropContext>
    </Box>
  );
};

export default TrendsGraphs;
