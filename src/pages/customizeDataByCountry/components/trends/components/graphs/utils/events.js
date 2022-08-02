// DATA GRAPH
/**
 * Si draggableId es de droppableGraphs, establezca graphType en draggableId; de lo contrario,
 * establezca chartType en draggableId.
 * @param result - el resultado de arrastrar y soltar
 * @param setGraphType - una función que establece el tipo de gráfico
 * @param setChartType - una función que establece el tipo de gráfico
 * @returns El resultado es un objeto con las siguientes propiedades:
 */
const handleGraphType = (result, setGraphType, setChartType) => {
  if (!result.destination) return;
  if (result.source.droppableId === "droppableGraphs")
    setGraphType(result.draggableId);
  else setChartType(result.draggableId);
};

export default handleGraphType;
