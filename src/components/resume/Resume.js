import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import DoneAllIcon from "@material-ui/icons/DoneAll";

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
    color: "black",
    fontWeight: "bold",
  },
  title: {
    color: "lightblue",
    fontWeight: "bold",
  },
  subtitle: {
    color: "lightgray",
    alignItems: "left",
    fontWeight: "bold",
    marginTop: 20,
  },
  description: {
    marginTop: 20,
    marginBottom: 20,
  },
  divider: {
    background: "white",
    marginBottom: 30,
  },
});

function Resume({ reference }) {
  const classes = useStyles();

  return (
    <section ref={reference}>
      <React.Fragment>
        <Container maxWidth="lg">
          <Grid container className={classes.gridVertical}>
            <Grid container className={classes.gridHorizontal}>
              <Grid item xs={12} sm={6}>
                <Typography
                  variant="h3"
                  component="h3"
                  className={classes.title}
                >
                  Resume
                </Typography>
                <Typography
                  variant="h6"
                  color="textSecondary"
                  className={classes.description}
                >
                  Professionally speaking, I am that engineer with a visionary
                  mindset and the pioneer's spirit.
                </Typography>
                <Typography
                  variant="h6"
                  color="textSecondary"
                  className={classes.description}
                >
                  Skilled in Full-Stack development, AWS Cloud architecture, and
                  Financial Markets.
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button
                  className={classes.button}
                  onClick={() => {
                    window.open(
                      "https://drive.google.com/file/d/1fw4w4Ppmk6AyNvPYbIaEzn3O1k8soASt/view?usp=sharing",
                      "_blank"
                    );
                  }}
                >
                  {" "}
                  Open Resume
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="h4" className={classes.subtitle}>
                  Education
                </Typography>
                <Typography
                  variant="h6"
                  color="textPrimary"
                  className={classes.description}
                >
                  <DoneAllIcon /> Bachelors in Informatic Engineering
                  <Typography
                    variant="h6"
                    color="textSecondary"
                    style={{ fontStyle: "italic" }}
                    className={classes.description}
                  >
                    Andrés Bello Catholic University - UCAB
                  </Typography>
                </Typography>
                <Typography
                  variant="h6"
                  color="textPrimary"
                  className={classes.description}
                >
                  <DoneAllIcon /> Master in Quantitative Finance
                </Typography>
                <Typography
                  variant="h6"
                  color="textSecondary"
                  style={{ fontStyle: "italic" }}
                  className={classes.description}
                >
                  University of Technology Sydney - UTS
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography
                  variant="h4"
                  color="textSecondary"
                  className={classes.subtitle}
                >
                  Certifications
                </Typography>
                <Typography
                  variant="h6"
                  color="textPrimary"
                  className={classes.description}
                >
                  <DoneAllIcon /> AWS Certified Cloud Practitioner
                  <Typography
                    variant="h6"
                    color="textSecondary"
                    style={{ fontStyle: "italic" }}
                    className={classes.description}
                  >
                    {" "}
                    Amazon Web Services
                  </Typography>
                </Typography>
                <Typography
                  variant="h6"
                  color="textPrimary"
                  className={classes.description}
                >
                  <DoneAllIcon /> Certified as Professional Trader and Portfolio
                  Manager
                </Typography>
                <Typography
                  variant="h6"
                  color="textSecondary"
                  style={{ fontStyle: "italic" }}
                  className={classes.description}
                >
                  Institute of Trading and Portfolio Management
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </React.Fragment>
    </section>
  );
}

export default Resume;
