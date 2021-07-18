import React from "react";
import styled from "styled-components";
import backgroundImage from "../../static/images/bg7.jpg";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    maxWidth: 400,
    borderRadius: "5%",
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
          <Card className={classes.card}>
            <CardContent>
              <Typography variant="h5" component="h2">
                Hector Longarte
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                I am a normal guy, with a nonconventional engineering skillset ...
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </PanelHeroImageContainer>
  );
};

export default PanelHeroImage;
