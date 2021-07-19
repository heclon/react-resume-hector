import React from "react";
import styled from "styled-components";
import backgroundImage from "../../static/images/bg7.jpg";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import PersonalCard from "../views/PersonalCard";
import SocialMediaBar from "../views/SocialMediaBar";

const useStyles = makeStyles({
  cardPersonal: {
    minWidth: 500,
    maxWidth: 550,
    borderRadius: "5%",
  },
  cardSocialMedia: {
    minWidth: 400,
    maxWidth: 400,
    marginTop: 30,
  },
  grid: {
    minWidth: 500,
    marginTop: 100,
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
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
`;

const PanelHeroImage = () => {
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

export default PanelHeroImage;
