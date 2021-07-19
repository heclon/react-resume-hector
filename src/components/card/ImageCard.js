import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    // maxWidth: 345,
  },
  media: {
    height: 200,
    width: 200,
  },

  fiCardContent: {
    color: "#ffffff",
    backgroundColor: "rgba(0,0,0,.24)",
  },
  fiCardContentTextSecondary: {
    color: "rgba(255,255,255,0.78)",
  },
});

const ImageCard = ({ imagePath, title, text }) => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Box my={4}>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={imagePath}
              title={title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {text}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
    </Container>
  );
};

export default ImageCard;
