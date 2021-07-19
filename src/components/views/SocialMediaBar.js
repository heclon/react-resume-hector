import React from "react";
import Fab from "@material-ui/core/Fab";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import GitHub from "@material-ui/icons/GitHub";
import LinkedIn from "@material-ui/icons/LinkedIn";
import Twitter from "@material-ui/icons/Twitter";

const useStyles = makeStyles({
  grid: {
    minWidth: 250,
    maxWidth: 250,
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  fab: {
    background: "transparent",
    boxShadow: "none",
    color: "white",
    shadow: "none",
    "&:hover": {
      color: "gray",
    },
  },
});

const SocialMediaBar = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.grid}>
      <Grid item xs={4}>
        <Fab className={classes.fab}>
          <LinkedIn />
        </Fab>
      </Grid>
      <Grid item xs={4}>
        <Fab className={classes.fab}>
          <GitHub />
        </Fab>
      </Grid>
      <Grid item xs={4}>
        <Fab className={classes.fab}>
          <Twitter />
        </Fab>
      </Grid>
    </Grid>
  );
};
export default SocialMediaBar;
