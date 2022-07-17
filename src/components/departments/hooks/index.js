import React, { useEffect } from "react";

const useSVGResize = () => {
  useEffect(() => {
    const svg = document.getElementById("departmentSVG");
    if (svg) {
      const bbox = svg.getBBox();
      const viewBox = [bbox.x, bbox.y, bbox.width, bbox.height].join(" ");
      svg.setAttribute("viewBox", viewBox);
    }
  }, []);
}

export default useSVGResize;