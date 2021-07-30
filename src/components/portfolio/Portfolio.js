import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

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
      background: "white",
      color: "black",
    },
    marginTop: "15%",
    marginLeft: "15%",
    width: "70%",
    height: "20%",
    background: "lightblue",
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
    marginBottom: 30,
  },
});

function Portfolio({ reference }) {
  const classes = useStyles();

  return (
    <section ref={reference}>
      <React.Fragment>
        <Container maxWidth="lg">
          <Divider className={classes.divider} />
          <Grid container className={classes.gridVertical}>
            <Grid container className={classes.gridHorizontal}>
              <Grid item xs={12} sm={6}>
                <Typography
                  variant="h3"
                  component="h3"
                  className={classes.title}
                >
                  Portfolio
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}></Grid>
            </Grid>
          </Grid>
        </Container>
      </React.Fragment>
    </section>
  );
}

export default Portfolio;
