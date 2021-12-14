import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import DoneAllIcon from "@material-ui/icons/DoneAll";

const linkResume = "https://drive.google.com/file/d/1N695vUhUexI-sIRi-8o2jrcysLaJJ9ZK/view?usp=sharing";

const useStyles = makeStyles(theme => ({
  gridVertical: {
    padding: theme.spacing(2),
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
    marginTop: "20%",
    marginBottom: "10%",
    marginLeft: "15%",
    width: "70%",
    height: "40px",
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
    paddingRight: theme.spacing(2),

  },
  divider: {
    background: "white",
    marginBottom: 30,
  },
}));

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
                  Professionally speaking, I am a software engineer with a
                  strong work ethic, a visionary
                  mindset and the pioneer's spirit.
                </Typography>
                <Typography
                  variant="h6"
                  color="textSecondary"
                  className={classes.description}
                >
                  Skilled in Full-Stack development, Software Engineering principles and best practices, SDLC standards, AWS Cloud architecture, and
                  Financial Markets.
                </Typography>

                <Grid item xl={12}> 
                <Typography
                  variant="h6"
                  color="textSecondary"
                  className={classes.description}
                  >
                  My experience includes developing software solutions for multiple industries including banking, fintech, retail, real estate, construction, and entertainment. Also, I have been part of the regional product support and consulting teams for SAP commerce implementations.
                </Typography>
              </Grid>
                
              </Grid>
              
              <Grid item xs={12} sm={6}>
                <Button
                  className={classes.button}
                  onClick={() => {
                    window.open(
                      linkResume,
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
                  <DoneAllIcon /> Bachelors in Informatic Engineering - 2010
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
                  <DoneAllIcon /> Master in Quantitative Finance - 2018
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
                  <DoneAllIcon /> AWS Certified Cloud Practitioner - 2020
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
                  Manager - 2021
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
