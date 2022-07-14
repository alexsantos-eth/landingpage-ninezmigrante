// POLYGONS
import Quetzaltenango from "../../../../country/components/statistics/components/heatMap/components/polygons/gt/quetzaltenango";
import Huehuetenango from "../../../../country/components/statistics/components/heatMap/components/polygons/gt/huehuetenango";
import Chimaltenango from "../../../../country/components/statistics/components/heatMap/components/polygons/gt/chimaltenango";
import Suchitepequez from "../../../../country/components/statistics/components/heatMap/components/polygons/gt/suchitepequez";
import Sacatepequez from "../../../../country/components/statistics/components/heatMap/components/polygons/gt/sacatepequez";
import AltaVerapaz from "../../../../country/components/statistics/components/heatMap/components/polygons/gt/altaVerapaz";
import BajaVerapaz from "../../../../country/components/statistics/components/heatMap/components/polygons/gt/bajaVerapaz";
import Totonicapan from "../../../../country/components/statistics/components/heatMap/components/polygons/gt/totonicapan";
import Retalhuleu from "../../../../country/components/statistics/components/heatMap/components/polygons/gt/retalhuleu";
import Chiquimula from "../../../../country/components/statistics/components/heatMap/components/polygons/gt/chiquimula";
import Guatemala from "../../../../country/components/statistics/components/heatMap/components/polygons/gt/guatemala";
import SantaRosa from "../../../../country/components/statistics/components/heatMap/components/polygons/gt/santaRosa";
import Escuintla from "../../../../country/components/statistics/components/heatMap/components/polygons/gt/escuintla";
import SanMarcos from "../../../../country/components/statistics/components/heatMap/components/polygons/gt/sanMarcos";
import Progreso from "../../../../country/components/statistics/components/heatMap/components/polygons/gt/progreso";
import Jutiapa from "../../../../country/components/statistics/components/heatMap/components/polygons/gt/jutiapa";
import Zacapa from "../../../../country/components/statistics/components/heatMap/components/polygons/gt/zacapa";
import Jalapa from "../../../../country/components/statistics/components/heatMap/components/polygons/gt/jalapa";
import Quiche from "../../../../country/components/statistics/components/heatMap/components/polygons/gt/quiche";
import Solola from "../../../../country/components/statistics/components/heatMap/components/polygons/gt/solola";
import Izabal from "../../../../country/components/statistics/components/heatMap/components/polygons/gt/izabal";
import Peten from "../../../../country/components/statistics/components/heatMap/components/polygons/gt/peten";

import Atlantida from "../../../../country/components/statistics/components/heatMap/components/polygons/hn/atlantida";
import Choluteca from "../../../../country/components/statistics/components/heatMap/components/polygons/hn/choluteca";
import Colon from "../../../../country/components/statistics/components/heatMap/components/polygons/hn/colon";
import Comayagua from "../../../../country/components/statistics/components/heatMap/components/polygons/hn/comayagua";
import Copan from "../../../../country/components/statistics/components/heatMap/components/polygons/hn/copan";
import Cortes from "../../../../country/components/statistics/components/heatMap/components/polygons/hn/cortes";
import ElParaiso from "../../../../country/components/statistics/components/heatMap/components/polygons/hn/elparaiso";
import Francis from "../../../../country/components/statistics/components/heatMap/components/polygons/hn/francis";
import Gracias from "../../../../country/components/statistics/components/heatMap/components/polygons/hn/gracias";
import Intibuca from "../../../../country/components/statistics/components/heatMap/components/polygons/hn/intibuca";
import IslasBahia from "../../../../country/components/statistics/components/heatMap/components/polygons/hn/islasbahia";
import LaPaz from "../../../../country/components/statistics/components/heatMap/components/polygons/hn/lapaz";
import Lempira from "../../../../country/components/statistics/components/heatMap/components/polygons/hn/lempira";
import Ocotepeque from "../../../../country/components/statistics/components/heatMap/components/polygons/hn/ocotepeque";
import Olancho from "../../../../country/components/statistics/components/heatMap/components/polygons/hn/olancho";
import SantaBarbara from "../../../../country/components/statistics/components/heatMap/components/polygons/hn/santabarbara";
import Valle from "../../../../country/components/statistics/components/heatMap/components/polygons/hn/valle";
import Yoro from "../../../../country/components/statistics/components/heatMap/components/polygons/hn/yoro";
import { colors } from "../../../../../utils/theme";

const countryDeps = {
  guatemala: [
    {
      id: "quetzaltenango",
      Content: Quetzaltenango,
      color: colors.heatMin[100],
    },
    { id: "huehuetenango", Content: Huehuetenango, color: colors.heatMin[100] },
    { id: "chimaltenango", Content: Chimaltenango, color: colors.heatMin[100] },
    { id: "suchitepequez", Content: Suchitepequez, color: colors.heatMin[100] },
    { id: "sacatepequez", Content: Sacatepequez, color: colors.heatMin[100] },
    { id: "altaverapaz", Content: AltaVerapaz, color: colors.heatMin[100] },
    { id: "bajaverapaz", Content: BajaVerapaz, color: colors.heatMin[100] },
    { id: "totonicapan", Content: Totonicapan, color: colors.heatMin[100] },
    { id: "retalhuleu", Content: Retalhuleu, color: colors.heatMin[100] },
    { id: "chiquimula", Content: Chiquimula, color: colors.heatMin[100] },
    { id: "guatemala", Content: Guatemala, color: colors.heatMin[100] },
    { id: "santarosa", Content: SantaRosa, color: colors.heatMin[100] },
    { id: "escuintla", Content: Escuintla, color: colors.heatMin[100] },
    { id: "sanmarcos", Content: SanMarcos, color: colors.heatMin[100] },
    { id: "elprogreso", Content: Progreso, color: colors.heatMin[100] },
    { id: "jutiapa", Content: Jutiapa, color: colors.heatMin[100] },
    { id: "zacapa", Content: Zacapa, color: colors.heatMin[100] },
    { id: "jalapa", Content: Jalapa, color: colors.heatMin[100] },
    { id: "quiche", Content: Quiche, color: colors.heatMin[100] },
    { id: "solola", Content: Solola, color: colors.heatMin[100] },
    { id: "izabal", Content: Izabal, color: colors.heatMin[100] },
    { id: "peten", Content: Peten, color: colors.heatMin[100] },
  ],
  honduras: [
    { id: "atlantida", Content: Atlantida, color: colors.heatMin[100] },
    { id: "choluteca", Content: Choluteca, color: colors.heatMin[100] },
    { id: "colon", Content: Colon, color: colors.heatMin[100] },
    { id: "comayagua", Content: Comayagua, color: colors.heatMin[100] },
    { id: "copan", Content: Copan, color: colors.heatMin[100] },
    { id: "cortes", Content: Cortes, color: colors.heatMin[100] },
    { id: "elparaiso", Content: ElParaiso, color: colors.heatMin[100] },
    { id: "francis", Content: Francis, color: colors.heatMin[100] },
    { id: "gracias", Content: Gracias, color: colors.heatMin[100] },
    { id: "intibuca", Content: Intibuca, color: colors.heatMin[100] },
    { id: "islasbahia", Content: IslasBahia, color: colors.heatMin[100] },
    { id: "lapaz", Content: LaPaz, color: colors.heatMin[100] },
    { id: "lempira", Content: Lempira, color: colors.heatMin[100] },
    { id: "ocotepeque", Content: Ocotepeque, color: colors.heatMin[100] },
    { id: "olancho", Content: Olancho, color: colors.heatMin[100] },
    { id: "santabarbara", Content: SantaBarbara, color: colors.heatMin[100] },
    { id: "valle", Content: Valle, color: colors.heatMin[100] },
    { id: "yoro", Content: Yoro, color: colors.heatMin[100] },
  ],
};

export default countryDeps;
