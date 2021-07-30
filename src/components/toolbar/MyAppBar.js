import React from "react";
import Button from "@material-ui/core/Button";
import { AppBar } from "@material-ui/core";
import Toolbar from "./Toolbar";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import scrollTo from "../../util/scrollTo";

const useStyles = makeStyles((theme) => ({
  gridHorizontal: {
    width: 600,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  toolbar: {
    justifyContent: "center",
  },
  button: {
    marginRight: 100,
    "&:hover": {
      background: "white",
      color: "black",
    },
  },
}));

function MyAppBar({ references }) {
  const { homeRef, aboutRef, techRef, portfolioRef } = references;

  const classes = useStyles();

  return (
    <React.Fragment>
      <AppBar position="static" elevation={0}>
        <Toolbar className={classes.toolbar}>
          <Grid container className={classes.gridHorizontal}>
            <Grid item xs={3}>
              <Button
                className={classes.button}
                onClick={() => scrollTo(homeRef)}
              >
                Home
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button
                className={classes.button}
                onClick={() => scrollTo(aboutRef)}
              >
                About
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button
                className={classes.button}
                onClick={() => scrollTo(techRef)}
              >
                Technologies
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button
                className={classes.button}
                onClick={() => scrollTo(portfolioRef)}
              >
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
