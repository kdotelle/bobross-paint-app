import React from "react";

import CanvasDraw from "react-canvas-draw";

import "./styles/CanvasStyles.css";

function Canvas(props) {
  return (
    <div>
      <CanvasDraw
        className="canvas"
        hideGrid
        canvasWidth="300"
        canvasHeight="400"
        lazyRadius="0"
        enablePanAndZoom
        brushColor={props.brushColor}
      />
    </div>
  );
}

export default Canvas;
