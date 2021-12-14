import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import DoneAllIcon from "@material-ui/icons/DoneAll";
import DomainForAgents from './DomainForAgents';
import DomainAnalytics from './DomainAnalytics';
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles({
  gridHorizontal: {
    flexDirection: "row",
  },
  button: {
    "&:hover": {
      background: "white",
      color: "black",
    },
    marginTop: "2%",
    marginBottom: "3%",
    width: "32%",
    height: "40px",
    background: "lightblue",
    color: "black",
    fontWeight: "bold",
  },
  header: {
    color: "lightblue",
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 20,
  },
  title: {
    marginTop: 20,
    marginBottom: 20,
    color: "lightgray",
    fontWeight: "bold",
  },
  subtitle: {
    marginTop: 20,
    marginBottom: 20,
    color: "white",
  },
  divider: {
    background: "gray",
    marginTop: 50,
    marginBottom: 30,
  },
});

function Portfolio({ reference }) {
  const classes = useStyles();

  return (
    <section ref={reference}>
      <React.Fragment>
        <Container maxWidth="lg">
          <Grid container
                direction="column"
                justifyContent="flex-start"
                alignItems="stretch">
              <Divider className={classes.divider} />
              <Grid item xs={12} sm={6}>
                <Typography
                  variant="h3"
                  component="h3"
                  className={classes.header}
                >
                  Portfolio
                </Typography>
              </Grid>
              <Grid item xl={12}> 
                <Typography
                    variant="h4"
                    component="h4"
                    color="textPrimary"
                    className={classes.title}
                  >
                    Domain for Agents and Property Lead Analytics
                </Typography>
                <Typography
                    variant="h6"
                    color="textSecondary"
                    style={{ fontStyle: "italic" }}
                    className={classes.description}
                  >
                    Built with NodeJS and React in AWS
                  </Typography>
                  <Button
                  className={classes.button}
                  onClick={() => {
                    window.open(
                      'https://agent.domain.com.au/domain-for-agents/',
                      '_blank'
                    );
                  }}
                >
                  {" "}
                  Check it out
                </Button>
              </Grid>
              
              <Grid container className={classes.gridHorizontal}>
              <Grid item xs={12} sm={6}>
                <DomainForAgents/>
              </Grid>
              <Grid item xs={12} sm={6}>
                <DomainAnalytics/>
              </Grid>
              </Grid>
              <Grid item xl={12}> 
                <Typography
                    variant="h4"
                    component="h4"
                    className={classes.title}
                  >
                    Quant finance projects
                </Typography>
              </Grid>
              
              <Grid container className={classes.gridHorizontal}>
              <Grid item xs={12} sm={6}>
              <Typography
                    variant="h6"
                    className={classes.subtitle}
                  >
                    <DoneAllIcon />  Black Scholes Options Pricing - American & European
                    <Typography
                    variant="h6"
                    color="textSecondary"
                    style={{ fontStyle: "italic" }}
                    className={classes.description}
                  >
                    Java and C++
                  </Typography>
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
              <Typography
                    variant="h6"
                    className={classes.subtitle}
                  >
                     <DoneAllIcon /> Barrier Options using Sequential Monte Carlo - European
                     <Typography
                    variant="h6"
                    color="textSecondary"
                    style={{ fontStyle: "italic" }}
                    className={classes.description}
                  >
                    Java and C++
                  </Typography>
                </Typography>
              </Grid>
                <Grid item xs={12} sm={6}>
                <Typography
                      variant="h6"
                      className={classes.subtitle}
                    >
                      <DoneAllIcon />  Least Squares Monte Carlo - American
                      <Typography
                    variant="h6"
                    color="textSecondary"
                    style={{ fontStyle: "italic" }}
                    className={classes.description}
                  >
                    Java and C++
                  </Typography>
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                <Typography
                      variant="h6"
                      className={classes.subtitle}
                    >
                      <DoneAllIcon /> Barrier Options using Sequential Monte Carlo - European Options
                      <Typography
                    variant="h6"
                    color="textSecondary"
                    style={{ fontStyle: "italic" }}
                    className={classes.description}
                  >
                    Java and C++
                  </Typography>
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                <Typography
                      variant="h6"
                      className={classes.subtitle}
                    >
                      <DoneAllIcon />  Portolfio construction and optimization
                      <Typography
                    variant="h6"
                    color="textSecondary"
                    style={{ fontStyle: "italic" }}
                    className={classes.description}
                  >
                    Python and R
                  </Typography>
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                <Typography
                      variant="h6"
                      className={classes.subtitle}
                    >
                      <DoneAllIcon /> Portfolio risk assestment and rebalancing
                      <Typography
                    variant="h6"
                    color="textSecondary"
                    style={{ fontStyle: "italic" }}
                    className={classes.description}
                  >
                    Python and R
                  </Typography>
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                <Typography
                      variant="h6"
                      className={classes.subtitle}
                    >
                      <DoneAllIcon /> Macro-micro market analysis 
                      <Typography
                    variant="h6"
                    color="textSecondary"
                    style={{ fontStyle: "italic" }}
                    className={classes.description}
                  >
                    Python and R
                  </Typography>
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                <Typography
                      variant="h6"
                      className={classes.subtitle}
                    >
                      <DoneAllIcon /> Brokerage API integration
                  </Typography>
                </Grid>
              </Grid>
              
          </Grid>
        </Container>
      </React.Fragment>
    </section>
  );
}

export default Portfolio;
