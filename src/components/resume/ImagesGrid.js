import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ImageCard from "../card/ImageCard";
import bikingImage from "../../static/images/biking.JPG";
import snowboardingImage from "../../static/images/snowboarding.JPG";
import kitesurfingImage from "../../static/images/kite.JPG";

const useStyles = makeStyles({
  gridImageItem: {
    margin: 9,
  },
});

function ImagesGrid() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid container>
        <Grid item xs={3} className={classes.gridImageItem}>
          <ImageCard
            imagePath={kitesurfingImage}
            title="Kitesurfing"
            text="Bali, Indonesia."
          />
        </Grid>
        <Grid item xs={3} className={classes.gridImageItem}>
          <ImageCard
            imagePath={bikingImage}
            title="Mountain biking"
            text="MontBlanc, Swiss alps."
          />
        </Grid>
        <Grid item xs={3} className={classes.gridImageItem}>
          <ImageCard
            imagePath={snowboardingImage}
            title="Snowboarding"
            text="Perisher, Australian alps."
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default ImagesGrid;
