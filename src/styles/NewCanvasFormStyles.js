import background from "./subtle-prism.svg";

const drawerWidth = 330;
//styles
const styles = (theme) => ({
  root: {
    backgroundColor: "#ffc6aa",
    backgroundImage: `url(${background})`,
    backgroundAttachment: "fixed",
    display: "flex",
    overflow: "auto",
    height: "100vh",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    height: "100vh",
  },
  drawerPaper: {
    width: drawerWidth,
    display: "flex",
    alignItems: "center",
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  container: {
    width: "90%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  buttonWrapper: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  },
  button: {
    width: "100%",
    margin: "0 0.25rem",
  },
  navButtons: {
    marginRight: "1rem",
    "& a": {
      textDecoration: "none",
    },
  },
  navButton: {
    margin: "0 0.5rem",
  },
  title: {
    fontFamily: "Comforter Brush, cursive",
    fontWeight: "bold",
  },
});

export default styles;
