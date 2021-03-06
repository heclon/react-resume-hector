import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import TechImages from "../card/TechImages";

const useStyles = makeStyles({
  gridVertical: {
    margin: 20,
    flexDirection: "column",
    alignItems: "left",
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
    background: "gray",
    marginTop: 50,
    marginBottom: 30,
  },
});

function Tech({ reference }) {
  const classes = useStyles();

  return (
    <section ref={reference}>
      <React.Fragment>
        <Container maxWidth="lg">
          <Divider className={classes.divider} />
            <Typography variant="h3" component="h3" className={classes.title}>
                Technologies
              </Typography>
              <TechImages />
        </Container>
      </React.Fragment>
    </section>
  );
}

export default Tech;
