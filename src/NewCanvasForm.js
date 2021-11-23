import React, { useState } from "react";
import { Link } from "react-router-dom";
import Canvas from "./Canvas.js";
import "./styles/NewCanvasFormStyles.css";

import clsx from "clsx";
import { withStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import BrushIcon from "@mui/icons-material/Brush";
import FormatPaintIcon from "@mui/icons-material/FormatPaint";

import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";

import styles from "./styles/NewCanvasFormStyles";

function NewCanvasForm(props) {
  const { classes } = props;
  const theme = useTheme();
  //drawer state
  const [open, setOpen] = useState(true);
  //color picker state
  const [color, setColor] = useColor("hex", "#121212");
  //canvas state
  const [canvas, setBrush] = useState("#FCA5A5");
  const [isErase, setErase] = useState(false);
  //slider state
  const [value, setValue] = useState(12);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const erase = () => {
    setErase(true);
    setBrush("#FFFFFF");
  };

  const draw = () => {
    setErase(false);
  };

  return (
    <div>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
          color="disabled"
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h4"
              noWrap
              color="error"
              className={classes.title}
            >
              Paint Like Bob Ross
            </Typography>
          </Toolbar>
          <div className={classes.navButtons}>
            <Link to="/">
              <Button
                variant="contained"
                color="primary"
                className={classes.navButton}
              >
                Go Back
              </Button>
            </Link>
          </div>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </div>
          <Divider />
          <div className={classes.container}>
            <ColorPicker
              width={300}
              height={228}
              color={color}
              onChange={setColor}
              hideHSV
            />
            <Typography>Brush Size</Typography>
            <Box sx={{ width: 200 }}>
              <Stack
                spacing={2}
                direction="row"
                sx={{ mb: 1 }}
                alignItems="center"
              >
                <Slider
                  aria-label="Volume"
                  value={value}
                  onChange={handleChange}
                />
              </Stack>
              <div className={classes.buttonWrapper}>
                <Button
                  className={classes.button}
                  variant={isErase ? "contained" : "outlined"}
                  color="primary"
                  onClick={erase}
                  startIcon={<FormatPaintIcon />}
                >
                  Erase
                </Button>
                <Button
                  className={classes.button}
                  variant={isErase ? "outlined" : "contained"}
                  color="secondary"
                  onClick={draw}
                  startIcon={<BrushIcon />}
                >
                  Paint
                </Button>
              </div>
            </Box>
          </div>
        </Drawer>
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />
          <Canvas
            brushColor={isErase ? canvas : color.hex}
            brushRadius={value}
          />
        </main>
      </div>
    </div>
  );
}

export default withStyles(styles, { withTheme: true })(NewCanvasForm);
