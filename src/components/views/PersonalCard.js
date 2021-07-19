import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  cardPersonal: {
    minHeight: 250,
    minWidth: 500,
    maxWidth: 550,
    borderRadius: "5%",
  },
});

const PersonalCard = () => {
  const classes = useStyles();

  return (
    <Card className={classes.cardPersonal}>
      <CardContent>
        <Typography variant="h3" component="h3">
          Hector Longarte
        </Typography>
        <Typography variant="h5" className={classes.pos} color="textSecondary">
          Much more than just an engineer
        </Typography>
      </CardContent>
    </Card>
  );
};
export default PersonalCard;
