// TOOLS
import depName from "../../../../country/components/statistics/components/heatMap/components/modal/utils";
import { quarterId } from "../../../../../hooks/fetch";
import { reorder } from "../../../../../utils/tools";
import { colors } from "../../../../../utils/theme";
import countryDeps, { depColors } from "../utils";
import { year } from "../../../../../utils/year";

export const getItemStyle = (isDragging, draggableStyle) => ({
  userSelect: "none",
  minWidth: 60,
  height: 60,
  margin: `0 8px 0 0`,
  borderRadius: "5px",
  transition: "background 0.2s ease-in-out",
  background: isDragging ? "transparent" : "lightgrey",
  ...draggableStyle,
});

export const getListStyle = () => ({
  display: "flex",
  padding: 8,
});

export const getDataItemStyle = (isDragging) => ({
  height: 305,
  display: "flex",
  width: "33.33%",
  flexDirection: "column",
  borderRadius: isDragging ? "5px" : "0",
  transition: "background 0.2s ease-in-out",
  background: isDragging ? "rgba(0,0,0,0.1)" : "transparent",
});

export const updateSection = ({
  id,
  dep,
  period,
  countryID,
  setDepDataList,
  setDepList,
}) => {
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
            if (stats._id === "Femenino") depGenderTotals.female += stats.total;
            if (stats._id === "Masculino") depGenderTotals.male += stats.total;
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
};

export const onDragEnd = ({
  result,
  countryID,
  period,
  setDepList,
  setDepDataList,
}) => {
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

    // ACTUALIZAR
    updateSection({ id, dep, countryID, period, setDepDataList, setDepList });
  }
};
