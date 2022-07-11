import * as zrender from "zrender/dist/zrender";
import React, { useEffect, useRef } from "react";

const Circle = () => {
  const ref = useRef<HTMLDivElement>(null);

  const draw = () => {
    var zr = zrender.init(ref.current);

    var circle = new zrender.Circle({
      shape: {
        cx: 150,
        cy: 50,
        r: 40,
      },
      style: {
        fill: "none",
        stroke: "#F00",
      },
    });

    zr.add(circle);
  };

  useEffect(() => {
    draw();
  }, []);

  return <div id="circle" ref={ref} style={{ width: '100%', height: '100%' }}></div>;
};

export default Circle;
