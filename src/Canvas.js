import React, { useRef } from "react";

import Button from "@material-ui/core/Button";
import CanvasDraw from "react-canvas-draw";

import { withStyles } from "@material-ui/core/styles";

import styles from "./styles/CanvasStyles";

function Canvas(props) {
  const myRef = useRef(null);
  const { classes } = props;

  return (
    <div className={classes.root}>
      <CanvasDraw
        ref={myRef}
        className={classes.canvas}
        hideGrid
        canvasWidth="400"
        canvasHeight="300"
        lazyRadius={0}
        brushColor={props.brushColor}
        brushRadius={props.brushRadius}
      />
      <div className={classes.canvasButtonWrapper}>
        <Button
          className={classes.clearButton}
          onClick={() => {
            myRef.current.clear();
          }}
          variant="contained"
        >
          Clear
        </Button>

        <Button
          className={classes.undoButton}
          onClick={() => {
            myRef.current.undo();
          }}
          variant="contained"
        >
          Undo
        </Button>
      </div>
    </div>
  );
}

export default withStyles(styles, { withTheme: true })(Canvas);
