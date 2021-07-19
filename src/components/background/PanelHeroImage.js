import React from "react";
import styled from "styled-components";
import backgroundImage from "../../static/images/bg7.jpg";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
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
          <Card className={classes.cardPersonal}>
            <CardContent>
              <Typography variant="h3" component="h3">
                Hector Longarte
              </Typography>
              <Typography
                variant="h5"
                className={classes.pos}
                color="textSecondary"
              >
                a headline will go here ...
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <SocialMediaBar />
        </Grid>
      </Grid>
    </PanelHeroImageContainer>
  );
};

export default PanelHeroImage;
