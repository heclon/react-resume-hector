import React from "react";
import styled from "styled-components";
import backgroundImage from "../../static/images/bg7.jpg";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import PersonalCard from "../card/PersonalCard";
import SocialMediaBar from "../social/SocialMediaGrid";
import Chevron from "../../static/cursor/arrow-213-24.ico";

const useStyles = makeStyles({
  grid: {
    minWidth: 500,
    marginTop: 100,
    flexDirection: "column",
    alignItems: "center",
  },
});

const PanelHeroImageContainer = styled.div`
  position: relative;
  height: 100%;
  min-height: 900px;
  width: 100%;
  margin-top: 0px;
  background: ${(props) =>
    props.image ? `url(${props.image})  center` : "gray"};
  background-size: cover !important;
  -webkit-background-size: cover !important;
  text-align: center;
  display: inline-block;
  cursor: url(${Chevron}) 30 30,auto;
}
`;

const Header = () => {
  const classes = useStyles();
  return (
    <PanelHeroImageContainer image={backgroundImage}>
      <Grid container className={classes.grid}>
        <Grid item xs={12}>
          <PersonalCard />
        </Grid>
        <Grid item xs={12}>
          <SocialMediaBar />
        </Grid>
      </Grid>
    </PanelHeroImageContainer>
  );
};

export default Header;
