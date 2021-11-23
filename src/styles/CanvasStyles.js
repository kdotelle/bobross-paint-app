const styles = (theme) => ({
  clearButton: {
    // to make a red delete button
    color: theme.palette.getContrastText(theme.palette.error.main),
    background: theme.palette.error.main,
    width: "25%",
  },
  undoButton: {
    // to make a yellow undo button
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
    height: "75vh",
    boxShadow: "0 10px 20px rgb(0 0 0 / 19%), 0 6px 6px rgb(0 0 0 / 23%)",
  },
  canvasButtonWrapper: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "2rem",
  },
});

export default styles;
