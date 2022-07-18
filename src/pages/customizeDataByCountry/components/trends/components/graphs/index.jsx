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

import { Bar } from "react-chartjs-2";

import FamilyIcon from "../../../../../../assets/family.png";
import GenderIcon from "../../../../../../assets/male.png";
import GroupIcon from "../../../../../../assets/group.png";
import BusIcon from "../../../../../../assets/bus.png";
import UsaIcon from "../../../../../../assets/usa.svg";
import { colors } from "../../../../../../utils/theme";
import { getCurrentQuarter, year } from "../../../../../../utils/year";
import { quarterId } from "../../../../../../hooks/fetch";

const graphDataTypes = {
  condition: "Condicion de viaje",
  return: "Pais de retorno",
  via: "Via de retorno",
  ages: "Rango etario",
  gender: "Genero",
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

const TrendsGraphs = ({ country }) => {
  const countryID = useParams().countryID || country;
  const [period, setPeriod] = useState("");
  const [graphType, setGraphType] = useState("");
  const [graphData, setGraphData] = useState({
    labels: [],
    datasets: [],
  });

  // PERIOD
  const handlePeriod = (ev) => setPeriod(ev.target.value);

  // DATA GRAPH
  const handleGraphType = (ev) => setGraphType(ev.target.value);

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
        `${
          import.meta.env.VITE_APP_API_URL
        }/consultas/totalporpaisanioperiodo/${countryID}/${label.year}/${
          quarterId[label.id]
        }`
      );
      const data = await req.json();
      const total = data?.data?.[0]?.totalRegistros ?? 0;
      return { ...label, total };
    });

    // RESOLVER
    Promise.allSettled(requests)
      .then((res) => {
        let data = res.map((r) => r.value);

        // AGRUPAR POR AÑOS
        if (period === "2") {
          let currentYear = year;

          data.forEach((totals) => {
            const nextTotal = totals.total;
            if (totals.year === currentYear) {
              if (totals.id === "q1") data[year - currentYear].total = 0;
              data[year - currentYear].total += nextTotal;
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
              label: "Dataset 1",
              data: data.map((totals) => totals.total),
              backgroundColor: "rgba(255, 99, 132, 0.5)",
            },
            {
              label: "Dataset 2",
              data: data.map((totals) => totals.total),
              backgroundColor: "rgba(53, 162, 235, 0.5)",
            },
          ],
        };
        setGraphData(newGraphData);
      })
      .catch((err) => console.log(err));
  }, [period]);

  console.log(graphData);

  return (
    <div style={{ maxWidth: 800, margin: "0 auto" }}>
      <DragDropContext>
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
          <Box style={{ width: "100%", overflowX: "auto" }}>
            <Droppable droppableId="droppableGraphs" direction="horizontal">
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  style={getListStyle(snapshot.isDraggingOver)}
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
                          style={getItemStyle(
                            snapshot.isDragging,
                            provided.draggableProps.style
                          )}
                        >
                          {item.Content}
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
        <Stack direction="column" alignItems="center" marginY={8}>
          <Text
            lineHeight={1}
            fontSize="1.5em"
            fontWeight={600}
          >{`Total de niñez y adolescencia retornada - ${countryID.toUpperCase()}`}</Text>
          <Text fontStyle="italic" lineHeight={1}>{`${
            customPeriods[period] ?? ""
          } - por ${graphDataTypes[graphType] ?? ""}`}</Text>
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
                  <Box style={{ pointerEvents: "none" }}>
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
                      }}
                      data={graphData}
                    />
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
