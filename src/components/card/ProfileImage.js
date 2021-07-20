import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import profileImage from "../../static/images/profile.png";

import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    borderRadius: "10%",
  },
  media: {
    height: 200,
    width: 200,
  },
});

function ProfileImage() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Container className={classes.container}>
        <Box my={4}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={profileImage}
                title={""}
              />
            </CardActionArea>
          </Card>
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default ProfileImage;
