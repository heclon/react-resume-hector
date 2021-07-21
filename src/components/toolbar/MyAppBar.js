import React,{ useRef, useEffect } from "react";
import Button from "@material-ui/core/Button";
import { AppBar } from "@material-ui/core";
import Toolbar from "./Toolbar";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import scrollTo from "../../util/scrollTo";

const useStyles = makeStyles((theme) => ({
  grid: {
    maxWidth: 370,
    flexDirection: "row",
    alignItems: "center",
  },
  toolbar: {
    justifyContent: "center",
  },
  button: {
    "&:hover": {
      background: "white",
      color: "black",
    },
  },
}));

function MyAppBar({aboutRef,portfolioRef}) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <AppBar position="fixed" elevation={0}>
        <Toolbar className={classes.toolbar}>
          <Grid container className={classes.grid} spacing={3}>
            <Grid item xs={4}>
              <Button className={classes.button}>Home</Button>
            </Grid>
            <Grid item xs={4}>
              <Button 
              className={classes.button}
              onClick={() => scrollTo(aboutRef)}
              >
                About
                </Button>
            </Grid>
            <Grid item xs={4}>
              <Button className={classes.button}
              onClick={() => scrollTo(portfolioRef)}>
                Portfolio
                </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

export default MyAppBar;
