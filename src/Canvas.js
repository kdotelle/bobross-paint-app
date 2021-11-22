import React, { Component, useRef } from "react";

import Button from "@material-ui/core/Button";

import CanvasDraw from "react-canvas-draw";

import "./styles/CanvasStyles.css";

import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  clearButton: {
    // to make a red delete button
    color: theme.palette.getContrastText(theme.palette.error.main),
    background: theme.palette.error.main,
    width: "25%",
  },
  undoButton: {
    // to make a red delete button
    color: theme.palette.getContrastText(theme.palette.warning.light),
    background: theme.palette.warning.light,
    width: "25%",
  },
  canvas: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: "3px",
    margin: "5rem",
    height: "75vh",
  },
  canvasButtonWrapper: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

function Canvas(props) {
  const myRef = useRef(null);
  const classes = useStyles();

  return (
    <div>
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

export default Canvas;
