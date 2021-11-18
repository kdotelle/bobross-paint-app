import React from "react";

import CanvasDraw from "react-canvas-draw";

import "./styles/CanvasStyles.css";

function Canvas(props) {
  return (
    <div>
      <CanvasDraw
        className="canvas"
        hideGrid
        canvasWidth="400"
        canvasHeight="400"
        lazyRadius="0"
        enablePanAndZoom
        brushColor={props.brushColor}
        brushRadius={props.brushRadius}
      />
    </div>
  );
}

export default Canvas;
