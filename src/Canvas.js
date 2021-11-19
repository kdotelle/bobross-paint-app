import React, { Component, useRef } from "react";
import Button from "@material-ui/core/Button";

import CanvasDraw from "react-canvas-draw";

import "./styles/CanvasStyles.css";

function Canvas(props) {
  const myRef = useRef(null);

  return (
    <div>
      <CanvasDraw
        ref={myRef}
        className="canvas"
        hideGrid
        canvasWidth="400"
        canvasHeight="300"
        lazyRadius={0}
        enablePanAndZoom
        brushColor={props.brushColor}
        brushRadius={props.brushRadius}
      />
      <Button
        onClick={() => {
          myRef.current.clear();
        }}
        variant="contained"
        color="primary"
      >
        Clear
      </Button>
      <Button
        onClick={() => {
          myRef.current.undo();
        }}
        variant="contained"
        color="secondary"
      >
        Undo
      </Button>
    </div>
  );
}

export default Canvas;
