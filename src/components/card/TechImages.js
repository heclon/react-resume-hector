import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

import ImageCard from "./ImageCard";
import nodeJSLogo from "../../static/images/nodejs.svg";
import apolloLogo from "../../static/images/apollo.svg";
import reactLogo from "../../static/images/react.png";
import graphQlLogo from "../../static/images/graphql.webp";
import awsLogo from "../../static/images/aws.svg";
import javalogo from "../../static/images/java.svg";
import pythonLogo from "../../static/images/python.svg";
import gitLogo from "../../static/images/git.svg";
import RLogo from "../../static/images/R.svg";

const useStyles = makeStyles({
  gridHorizontal: {
    flexDirection: "row",
  },
  container: {
    display: "flex",
    alignItems: "center",
  },
  subtitle: {
    color: "lightgray",
    alignItems: "left",
    fontWeight: "bold",
    marginTop: 20,
  },
});

function TechImages() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Typography variant="h4" className={classes.subtitle}>
        Full-Stack and APIs
      </Typography>
      <Container className={classes.container}>
        <ImageCard
          imagePath={reactLogo}
          title="React and React Native"
          text="Web frontends and mobile apps"
        />

        <ImageCard
          imagePath={graphQlLogo}
          title="GraphQL"
          text="GraphQL APIs"
        />

        <ImageCard imagePath={nodeJSLogo} title="NodeJS" text="API first" />

        <ImageCard
          imagePath={apolloLogo}
          title="Apollo"
          text="Server & Client"
        />
      </Container>
      <Typography variant="h4" className={classes.subtitle}>
        Cloud, APIs and Backends
      </Typography>
      <Container className={classes.container}>
        <ImageCard
          imagePath={awsLogo}
          title="Amazon Web Services"
          text="Cloud computing"
        />

        <ImageCard imagePath={javalogo} title="Java" text="Backends and APIs" />

        <ImageCard
          imagePath={pythonLogo}
          title="Python"
          text="Backends and APIs"
        />

        <ImageCard imagePath={gitLogo} title="Git" text="Git repos for all work" />
      </Container>

      <Typography variant="h4" className={classes.subtitle}>
        Financial markets
      </Typography>
      <Container className={classes.container}>
        <ImageCard
          imagePath={RLogo}
          title="R"
          text="Macro and quantitative analysis"
        />

        <ImageCard
          imagePath={pythonLogo}
          title="Python for finance"
          text="Trading APIs and quantitative analysis"
        />
      </Container>
    </React.Fragment>
  );
}

export default TechImages;
