import React, { useState, useEffect } from "react";
import { reorder } from "../../../../utils/tools";
import { year } from "../../../../utils/year";
import { quarterId } from "../../../../hooks/fetch";
import depName from "../../../country/components/statistics/components/heatMap/components/modal/utils";

import { Select, Text } from "@chakra-ui/react";

// REACT ROUTER DOM
import { useParams } from "react-router-dom";

import countryDeps from "./utils";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { colors } from "../../../../utils/theme";

const grid = 8;
const getItemStyle = (isDragging, draggableStyle) => ({
  userSelect: "none",
  width: 300,
  margin: `0 ${grid}px 0 0`,
  ...draggableStyle,
  background: isDragging ? "transparent" : "lightgrey",
});

const getListStyle = () => ({
  display: "flex",
  padding: grid,
  overflow: "auto",
});

const depColors = [colors.red[700], colors.yellow[700], colors.blue[700]];

const DnDDepartment = ({ country = "guatemala" }) => {
  const countryID = useParams().countryID || country;
  const [depList, setDepList] = useState(countryDeps[countryID]);
  const [period, setPeriod] = useState("");
  const [depDataList, setDepDataList] = useState([
    { reload: true },
    { reload: true },
    { reload: true },
  ]);

  // PERIOD
  const handlePeriod = (ev) => {
    setPeriod(ev.target.value);
    setDepDataList([{ reload: true }, { reload: true }, { reload: true }]);
  };

  const onDepsDragEnd = (result) => {
    if (!result.destination) return;

    if (result.destination.droppableId === "droppableDeps") {
      const newItems = reorder(
        depList,
        result.source.index,
        result.destination.index
      );
      setDepList(newItems);
    } else {
      // DATA
      const id = +result.destination.droppableId.substring(13) - 1;
      const dep = result.draggableId;

      // LOADING
      setDepDataList((prevData) => {
        const tmp = [...prevData];
        tmp[id] = { reload: true };
        return tmp;
      });

      // OBTENER TOTALES
      fetch(
        `${import.meta.env.VITE_APP_API_URL}/consultas/totalpordepartamento/${
          "2020" ?? year
        }/${quarterId[period]}/${countryID}/${depName[dep]}`
      )
        .then((res) => res.json())
        .then((totalData) => {
          fetch(
            `${
              import.meta.env.VITE_APP_API_URL
            }/consultas/totalgeneropordepartamento/${"2020" ?? year}/${
              quarterId[period]
            }/${countryID}/${depName[dep]}`
          )
            .then((res) => res.json())
            .then((genderData) => {
              const total = totalData?.data?.[0]?.total ?? 0;
              let depGenderTotals = { male: 0, female: 0 };

              genderData?.data?.forEach((stats) => {
                if (stats._id === "Femenino")
                  depGenderTotals.female += stats.total;
                if (stats._id === "Masculino")
                  depGenderTotals.male += stats.total;
              });

              setDepDataList((prev) => {
                const tmp = [...prev];
                tmp[id] = {
                  ...depGenderTotals,
                  name: depName[dep],
                  id: dep,
                  Content: countryDeps[countryID].find(
                    (depPath) => depPath.id === dep
                  ).Content,
                  total,
                  reload: false,
                };

                // COLORES
                setDepList((prevDeps) => {
                  const tmpDeps = [...prevDeps].map((depPath) => ({
                    ...depPath,
                    color: colors.heatMin[100],
                  }));
                  tmp.forEach((data, index) => {
                    if (data.name?.length) {
                      const depIndex = tmpDeps.findIndex(
                        (depInfo) => depInfo.id === data.id
                      );
                      tmpDeps[depIndex].color = depColors[index];
                    }
                  });

                  return tmpDeps;
                });

                return tmp;
              });
            });
        });
    }
  };

  useEffect(() => {
    const svg = document.querySelectorAll(".depSVG");
    if (svg) {
      svg.forEach((el) => {
        const bbox = el.getBBox();
        const viewBox = [bbox.x, bbox.y, bbox.width, bbox.height].join(" ");
        el.setAttribute("viewBox", viewBox);
      });
    }
  }, [countryID, depDataList]);

  return (
    <DragDropContext onDragEnd={onDepsDragEnd}>
      <div style={{ display: "flex" }}>
        <Select
          value={period || "default"}
          fontSize="2xl"
          lineHeight="1.8"
          fontWeight="600"
          fontFamily="Times"
          letterSpacing="1.2px"
          onChange={handlePeriod}
          bgColor="rgba(255,255,255,0.5)"
        >
          <option value="default">Elegir cuatrimestre</option>
          <option value="q1">Enero - Abril</option>
          <option value="q2">Mayo - Agosto</option>
          <option value="q3">Septiembre - Diciembre</option>
        </Select>

        <Droppable droppableId="droppableDeps" direction="horizontal">
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver)}
              {...provided.droppableProps}
            >
              {depList.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
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
                      <svg
                        x="0px"
                        y="0px"
                        version="1.2"
                        width="100%"
                        height="100%"
                        className="depSVG"
                        xmlSpace="preserve"
                        viewBox="0 0 585.94 612"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                      >
                        <item.Content customColor={item.color} disableHeat />
                      </svg>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
      <div style={{ display: "flex" }}>
        <Droppable droppableId="droppableData1">
          {(provided) => {
            const item = depDataList[0];
            return (
              <div
                ref={provided.innerRef}
                style={{
                  ...provided.draggableStyle,
                  height: 500,
                  width: "33.33%",
                  display: "flex",
                  flexDirection: "column",
                  background: "#F5F5F5",
                }}
                {...provided.droppableProps}
              >
                {item.reload ? (
                  <Text>Cargando ...</Text>
                ) : (
                  <div>
                    <svg
                      x="0px"
                      y="0px"
                      version="1.2"
                      width="100%"
                      height="200"
                      className="depSVG"
                      xmlSpace="preserve"
                      viewBox="0 0 585.94 612"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <item.Content customColor={depColors[0]} disableHeat />
                    </svg>
                    <Text>{item.name}</Text>
                    {item.total}
                    <Text>Hombres: {item.male}</Text>
                    <Text>Mujeres: {item.female}</Text>
                    {provided.placeholder}
                  </div>
                )}
              </div>
            );
          }}
        </Droppable>
        <Droppable droppableId="droppableData2">
          {(provided) => {
            const item = depDataList[1];

            return (
              <div
                ref={provided.innerRef}
                style={{
                  ...provided.draggableStyle,
                  height: 500,
                  width: "33.33%",
                  display: "flex",
                  flexDirection: "column",
                  background: "#F5F5F5",
                }}
                {...provided.droppableProps}
              >
                {item.reload ? (
                  <Text>Cargando ...</Text>
                ) : (
                  <div>
                    <svg
                      x="0px"
                      y="0px"
                      version="1.2"
                      width="100%"
                      height="200"
                      className="depSVG"
                      xmlSpace="preserve"
                      viewBox="0 0 585.94 612"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <item.Content customColor={depColors[1]} disableHeat />
                    </svg>
                    <Text>{item?.name}</Text>
                    {item?.total}
                    <Text>Hombres: {item?.male}</Text>
                    <Text>Mujeres: {item?.female}</Text>
                    {provided.placeholder}
                  </div>
                )}
              </div>
            );
          }}
        </Droppable>
        <Droppable droppableId="droppableData3">
          {(provided) => {
            const item = depDataList[2];

            return (
              <div
                ref={provided.innerRef}
                style={{
                  ...provided.draggableStyle,
                  height: 500,
                  width: "33.33%",
                  display: "flex",
                  flexDirection: "column",
                  background: "#F5F5F5",
                }}
                {...provided.droppableProps}
              >
                {item.reload ? (
                  <Text>Cargando ...</Text>
                ) : (
                  <div>
                    <svg
                      x="0px"
                      y="0px"
                      version="1.2"
                      width="100%"
                      height="200"
                      className="depSVG"
                      xmlSpace="preserve"
                      viewBox="0 0 585.94 612"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <item.Content customColor={depColors[2]} disableHeat />
                    </svg>
                    <Text>{item?.name}</Text>
                    {item?.total}
                    <Text>Hombres: {item?.male}</Text>
                    <Text>Mujeres: {item?.female}</Text>
                    {provided.placeholder}
                  </div>
                )}
              </div>
            );
          }}
        </Droppable>
      </div>
    </DragDropContext>
  );
};

export default DnDDepartment;
