import React, { useEffect } from "react";

/**
 * Toma una referencia a un elemento SVG y establece el atributo viewBox en el cuadro delimitador del
 * SVG
 * @param svgRef - La referencia al elemento SVG.
 */
const useSVGResize = (svgRef) => {
  useEffect(() => {
    const svg = svgRef.current;
    if (svg) {
      const bbox = svg.getBBox();
      const viewBox = [bbox.x, bbox.y, bbox.width, bbox.height].join(" ");
      svg.setAttribute("viewBox", viewBox);
    }
  });
};

export default useSVGResize;
