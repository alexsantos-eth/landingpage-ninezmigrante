// DATA GRAPH
const handleGraphType = (result, setGraphType, setChartType) => {
  if (!result.destination) return;
  if (result.source.droppableId === "droppableGraphs")
    setGraphType(result.draggableId);
  else setChartType(result.draggableId);
};

export default handleGraphType;
