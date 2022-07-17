import React, { useState } from "react";

// REACT ROUTER DOM
import { useParams } from "react-router-dom";

// TOOLS
import { year } from "../../../../../../utils/year";

// COMPONENTES
import DepartmentData from "./components/departmentData";

// UTILS
import {
  getListStyle,
  getItemStyle,
  getDataItemStyle,
  onDragEnd,
} from "./tools";
import { usePeriodReload } from "./hooks";
import countryDeps from "./utils";
import ModalContentGT from "../../../../../../components/departments/components/gt";
import ModalContentHN from "../../../../../../components/departments/components/hn";

// CHACKRA
import { Select, Text, Stack, Box } from "@chakra-ui/react";

// DND
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const DnDDepartment = ({ country = "guatemala" }) => {
  // PROPS DE DEPARTAMENTOS
  const countryID = useParams().countryID || country;
  const [depList, setDepList] = useState(countryDeps[countryID]);
  const [period, setPeriod] = useState("");

  // LISTA DE DATOS
  const [depDataList, setDepDataList] = useState([
    { reload: true },
    { reload: true },
    { reload: true },
  ]);

  // PERIOD
  const handlePeriod = (ev) => setPeriod(ev.target.value);

  // REORDENAR
  const onDepsDragEnd = (result) =>
    onDragEnd({ result, period, countryID, setDepList, setDepDataList });

  // HOOKS
  usePeriodReload({
    period,
    countryID,
    setDepList,
    depDataList,
    setDepDataList,
  });

  return (
    <div style={{ maxWidth: 800, margin: "0 auto" }}>
      <DragDropContext onDragEnd={onDepsDragEnd}>
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
          >
            <option value="default">Elegir cuatrimestre</option>
            <option value="q1">Enero - Abril</option>
            <option value="q2">Mayo - Agosto</option>
            <option value="q3">Septiembre - Diciembre</option>
          </Select>

          {/* LISTA DE DEPARTAMENTOS */}
          <Box style={{ maxWidth: "475px", overflowX: "auto" }}>
            <Droppable droppableId="droppableDeps" direction="horizontal">
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  style={getListStyle(snapshot.isDraggingOver)}
                  {...provided.droppableProps}
                >
                  {depList.map((item, index) => (
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
                            {countryID === "guatemala" ? (
                              <ModalContentGT
                                customColor={item.color}
                                disableHeat
                              />
                            ) : (
                              <ModalContentHN
                                customColor={item.color}
                                disableHeat
                              />
                            )}
                          </svg>
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
          <Text
            fontStyle="italic"
            lineHeight={1}
          >{`Cuatrimestre ${period.substring(
            1
          )} ${year} - Departamentos seleccionados`}</Text>
        </Stack>

        {/* SECCION 1 */}
        <Stack direction="row" spacing={0}>
          <Droppable droppableId="droppableData1">
            {(provided, snapshot) => {
              const item = depDataList[0];
              return (
                <div
                  ref={provided.innerRef}
                  style={getDataItemStyle(snapshot.isDraggingOver)}
                  {...provided.droppableProps}
                >
                  <DepartmentData
                    index={0}
                    item={item}
                    setDepDataList={setDepDataList}
                    isDragOver={snapshot.isDraggingOver}
                  />
                  {provided.placeholder}
                </div>
              );
            }}
          </Droppable>

          {/* SECCION 2 */}
          <Droppable droppableId="droppableData2">
            {(provided, snapshot) => {
              const item = depDataList[1];
              return (
                <div
                  ref={provided.innerRef}
                  style={{
                    ...getDataItemStyle(snapshot.isDraggingOver),
                    borderRight: "1px solid #333",
                    borderLeft: "1px solid #333",
                  }}
                  {...provided.droppableProps}
                >
                  <DepartmentData
                    index={1}
                    item={item}
                    setDepDataList={setDepDataList}
                    isDragOver={snapshot.isDraggingOver}
                  />
                  {provided.placeholder}
                </div>
              );
            }}
          </Droppable>

          {/* SECCION 3 */}
          <Droppable droppableId="droppableData3">
            {(provided, snapshot) => {
              const item = depDataList[2];
              return (
                <div
                  ref={provided.innerRef}
                  style={getDataItemStyle(snapshot.isDraggingOver)}
                  {...provided.droppableProps}
                >
                  <DepartmentData
                    index={2}
                    item={item}
                    setDepDataList={setDepDataList}
                    isDragOver={snapshot.isDraggingOver}
                  />
                  {provided.placeholder}
                </div>
              );
            }}
          </Droppable>
        </Stack>
      </DragDropContext>
    </div>
  );
};

export default DnDDepartment;
