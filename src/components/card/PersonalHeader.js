import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  cardPersonal: {
    background: "transparent",
    boxShadow: "none",
  },
  title: {
    fontWeight: "bold",
    padding: theme.spacing(2),
  },
  media: {
    filter: "invert(1)",
  },
}));

const PersonalCardHeader = () => {
  const classes = useStyles();

  return (
    <Card className={classes.cardPersonal}>
      <CardContent>
        <Typography variant="h1" component="h1" className={classes.title}>
          Hector Longarte
        </Typography>

        <Typography variant="h3" className={classes.title} color="textSecondary">
          Full-stack and Cloud engineer
        </Typography>
      </CardContent>
    </Card>
  );
};
export default PersonalCardHeader;
