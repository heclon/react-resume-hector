import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import hectorMandoFont from "../../static/images/HL_mandalorian.png";

const useStyles = makeStyles(theme => ({
  cardPersonal: {
    background: "transparent",
    boxShadow: "none",
    // marginTop: 10,
    // minHeight: 50,
  },
  title: {
    fontWeight: "bold",
    padding: theme.spacing(2),
  },
  media: {
    // height: 180,
    // width: 1700,
    filter: "invert(1)",
  },
}));

const PersonalCardHeader = () => {
  const classes = useStyles();

  return (
    <Card className={classes.cardPersonal}>
      {/* <CardMedia className={classes.media} image={hectorMandoFont} title="" /> */}
      <CardContent>
        <Typography variant="h1" component="h1" className={classes.title}>
          Hector Longarte
        </Typography>

        <Typography variant="h3" className={classes.title} color="textSecondary">
          {/* Full-stack, Cloud and Financial Markets engineer. All in one. */}
          Full-stack and Cloud engineer
        </Typography>
      </CardContent>
    </Card>
  );
};
export default PersonalCardHeader;
