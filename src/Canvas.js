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
        brushColor={props.brushColor}
        brushRadius={props.brushRadius}
      />
      <div className="canvasButtonWrapper">
        <Button
          className="canvasButtons"
          onClick={() => {
            myRef.current.clear();
          }}
          variant="contained"
          color="primary"
        >
          Clear
        </Button>
        <Button
          className="canvasButtons"
          onClick={() => {
            myRef.current.undo();
          }}
          variant="contained"
          color="secondary"
        >
          Undo
        </Button>
      </div>
    </div>
  );
}

export default Canvas;
