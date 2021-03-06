import React from "react";
import styled from "styled-components";
import backgroundImage from "../../static/images/bg7.jpg";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import PersonalCardHeader from "../card/PersonalHeader";
import SocialMediaBar from "../social/SocialMediaGrid";
import Chevron from "../../static/cursor/arrow-213-24.ico";
import Button from "@material-ui/core/Button";
import scrollTo from "../../util/scrollTo";

const useStyles = makeStyles({
  grid: {
    marginTop: 100,
    flexDirection: "column",
    alignItems: "center",
  },
  button: {
    "&:hover": {
      background: "white",
      color: "black",
    },
  },
});

const PanelHeroImageContainer = styled.div`
  position: relative;
  min-height: 900px;
  top: 0px;
  left: 0,
  height: 100%;
  width: 100%;
  background: ${(props) =>
    props.image ? `url(${props.image})  center` : "gray"};
  // background-size: cover !important;
  // -webkit-background-size: cover !important;
  text-align: center;
  display: inline-block;
  cursor: url(${Chevron}) 30 30,auto;
  overflow: hidden;
}
`;

const Header = ({ references }) => {
  const { homeRef, aboutRef, techRef, portfolioRef } = references;

  const classes = useStyles();
  return (
    <section ref={homeRef}>
      <PanelHeroImageContainer image={backgroundImage}>
        <Grid container className={classes.grid}>
          <Grid item xs={6}>
            <Button
              className={classes.button}
              onClick={() => scrollTo(aboutRef)}
            >
              About
            </Button>
            <Button
              className={classes.button}
              onClick={() => scrollTo(techRef)}
            >
              Technologies
            </Button>
            <Button
              className={classes.button}
              onClick={() => scrollTo(portfolioRef)}
            >
              Portfolio
            </Button>
          </Grid>
          <Grid item xs={12}>
            <PersonalCardHeader />
          </Grid>
          <Grid item xs={12}>
            <SocialMediaBar />
          </Grid>
        </Grid>
      </PanelHeroImageContainer>
    </section>
  );
};

export default Header;
