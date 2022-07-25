import React, { useEffect } from "react";

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
