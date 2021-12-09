import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ProfileImage from "../card/ProfileImage";

const useStyles = makeStyles(theme => ({
  gridVertical: {
    flexDirection: "column",
    alignItems: "center",
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
  about: {
    color: "lightblue",
    fontWeight: "bold",
    position: 'relative'
  },
  root: {
    padding: theme.spacing(12, 4),
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
}));

function About({ reference }) {
  const classes = useStyles();

  return (
    <section ref={reference}>
        <Container component="section" maxWidth="lg" className={classes.root}>
          <Grid container className={classes.gridVertical}>
            <Grid container className={classes.gridHorizontal}>
              <Grid item xs={12} sm={6}>
                <ProfileImage />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography
                  variant="h3"
                  component="h3"
                  className={classes.about}
                >
                  About
                </Typography>
                <Typography
                  variant="h6"
                  color="textSecondary"
                  className={classes.description}
                >
                  Welcome to my personal website.
                </Typography>
                <Typography
                  variant="h6"
                  color="textSecondary"
                  className={classes.description}
                >
                  I am original from Venezuela, a friendly guy with a passion for sports.
                </Typography>
                <Typography
                  variant="h6"
                  color="textSecondary"
                  className={classes.description}
                >
                  My hobbies include having an active lifestyle, natural
                  landscapes photography, adventure-seeking travels, reading
                  books, and the ocassional mountain or water sports.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Container>
    </section>
  );
}

export default About;
