// TOOLS
import depName from "../../../../../../country/components/statistics/components/heatMap/components/modal/utils";
import { reorder } from "../../../../../../../utils/tools";
import { colors } from "../../../../../../../utils/theme";
import countryDeps, { depColors } from "../utils";
import { year } from "../../../../../../../utils/year";

export const getItemStyle = (isDragging, draggableStyle) => ({
  userSelect: "none",
  minWidth: 55,
  height: 55,
  margin: `0 8px 0 0`,
  borderRadius: "5px",
  transition: "background 0.2s ease-in-out",
  background: "transparent",
  ...draggableStyle,
});

export const getListStyle = () => ({
  display: "flex",
  padding: 8,
});

export const getDataItemStyle = (isDragging) => ({
  height: 305,
  display: "flex",
  flexDirection: "column",
  borderRadius: isDragging ? "5px" : "0",
  transition: "background 0.2s ease-in-out",
  background: isDragging ? "rgba(0,0,0,0.1)" : "transparent",
});

/**
 * Obtiene datos de una API, luego actualiza el estado de la aplicación
 */
export const updateSection = ({
  id,
  dep,
  period,
  countryID,
  setDepDataList,
  setDepList,
  currentYear,
}) => {
  // OBTENER TOTALES
  const url = `${
    import.meta.env.VITE_APP_API_URL
  }/consultas/totalgeneropordepartamento/${countryID}/${depName[dep]}?anio=${
    currentYear ?? year
  }&inicio=${period[0]}&fin=${period[1]}`;
  
  fetch(url)
    .then((res) => res.json())
    .then((genderData) => {
      let depGenderTotals = { male: 0, female: 0 };

      genderData?.data?.forEach((stats) => {
        const id = stats._id?.toLowerCase()?.trim();

        if (id === "femenino" || id === "f")
          depGenderTotals.female += stats.total;
        if (id === "masculino" || id === "m")
          depGenderTotals.male += stats.total;
      });

      const total = depGenderTotals.female + depGenderTotals.male;

      setDepDataList((prev) => {
        const tmp = [...prev];
        tmp[id] = {
          ...depGenderTotals,
          name: depName[dep],
          id: dep,
          Content: countryDeps[countryID].find((depPath) => depPath.id === dep)
            .Content,
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
};

/**
 * Si el destino es el mismo que el origen, reordene la lista; de lo contrario, actualice la sección.
 * @returns el resultado de la llamada de función a updateSection.
 */
export const onDragEnd = ({
  result,
  countryID,
  period,
  setDepList,
  setDepDataList,
}) => {
  if (!result.destination) return;

  if (result.destination.droppableId === "droppableDeps") {
    setDepList((depList) =>
      reorder(depList, result.source.index, result.destination.index)
    );
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

    // ACTUALIZAR
    updateSection({ id, dep, countryID, period, setDepDataList, setDepList });
  }
};
