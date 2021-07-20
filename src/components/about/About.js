import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ProfileImage from "../card/ProfileImage";

const useStyles = makeStyles({
  gridVertical: {
    margin: 20,
    flexDirection: "column",
    alignItems: "center",
    color: "gray",
  },
  gridHorizontal: {
    flexDirection: "row",
  },
  button: {
    "&:hover": {
      background: "lightblue",
      color: "black",
    },
    marginTop: "15%",
    marginLeft: "15%",
    width: "70%",
    height: "20%",
    background: "lightgray",
    color: "gray",
    fontWeight: "bold",
  },
  title: {
    color: "lightblue",
    fontWeight: "bold",
  },
  description: {
    marginTop: 20,
    marginBottom: 20,
  },
  divider: {
    background: "lightblue",
    marginTop: 30,
    marginBottom: 30,
  },
});

function About() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container maxWidth="lg">
        <Grid container className={classes.gridVertical}>
          <Grid container className={classes.gridHorizontal}>
            <Grid item xs={12} sm={6}>
              <ProfileImage />
            </Grid>
            <Grid item xs={12} sm={6}>
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
                Sydney based, original from Venezuela, friendly guy with a
                strong work ethic.
              </Typography>
              <Typography
                variant="h6"
                color="textSecondary"
                className={classes.description}
              >
                My hobbies include having an active lifestyle, natural
                landscapes photography, adventure-seeking travels, reading
                books, and ocassional attempts to perform extreme sports:
                mountain biking, snowboarding and kitesurfing.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default About;
