import React, { useState } from "react";

import CanvasDraw from "react-canvas-draw";

import "./styles/CanvasStyles.css";

function Canvas() {
  const [canvas, setBrush] = useState("#FCA5A5");
  const [brush, setThick] = useState(50);

  return (
    <div>
      <CanvasDraw
        className="canvas"
        hideGrid
        canvasWidth="300"
        canvasHeight="400"
        lazyRadius="0"
        enablePanAndZoom
      />
    </div>
  );
}

export default Canvas;
