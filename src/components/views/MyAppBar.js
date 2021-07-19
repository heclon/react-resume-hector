import * as React from "react";
import Button from "@material-ui/core/Button";
import { AppBar } from "@material-ui/core";
import Toolbar from "./Toolbar";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

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

function MyAppBar() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <AppBar position="fixed" elevation={0}>
        <Toolbar className={classes.toolbar}>
          <Grid container className={classes.grid} spacing={3}>
            <Grid item xs={4}>
              <Button className={classes.button}>About</Button>
            </Grid>
            <Grid item xs={4}>
              <Button className={classes.button}>Resume</Button>
            </Grid>
            <Grid item xs={4}>
              <Button className={classes.button}>Portfolio</Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </React.Fragment>
  );
}

export default MyAppBar;
