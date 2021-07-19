import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ImagesGrid from "./ImagesGrid";

const useStyles = makeStyles({
  gridText: {
    minWidth: 100,
    marginTop: 20,
    marginLeft: 50,
    marginRight: 50,
    flexDirection: "row",
    alignItems: "center",
    color: "gray",
  },
  gridImages: {
    flexDirection: "row",
  },
  button: {
    "&:hover": {
      background: "white",
      color: "black",
    },
  },
  title: {
    color: "lightblue",
  },
  description: {
    marginTop: 20,
    marginBottom: 20,
  },
  divider: {
    background: "lightblue",
    marginBottom: 30,
  },
});

function Resume() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid container className={classes.gridText}>
        <Grid item xs={6}>
          <Typography variant="h3" component="h3" className={classes.title}>
            About
          </Typography>
          <Typography
            variant="h6"
            color="textSecondary"
            className={classes.description}
          >
            Hello :) and welcome to my personal website.
          </Typography>
          <Typography
            variant="h6"
            color="textSecondary"
            className={classes.description}
          >
            My personal life is based on having an active lifestyle,
            adventure-seeking travels, reading, and attempts of performing
            extreme sports like mountain biking, snowboarding, and kitesurfing.
          </Typography>

          <Divider className={classes.divider} />
          <Typography variant="h3" component="h3" className={classes.title}>
            Resume
          </Typography>
          <Typography
            variant="h6"
            color="textSecondary"
            className={classes.description}
          >
            Professionally speaking, I am that engineer with a visionary mindset
            and the pioneer's spirit.
          </Typography>
          <Typography
            variant="h6"
            color="textSecondary"
            className={classes.description}
          >
            Skilled in Full-Stack development, AWS Cloud architecture, and with
            Financial Markets knowledge and self-made experience.
          </Typography>
        </Grid>
        <Grid item xs={6} className={classes.gridImages}>
          <ImagesGrid />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Resume;
