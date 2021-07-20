import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
  card: {
    borderRadius: "5%",
    maxWidth: 345,
    margin: 20,
  },
  media: {
    height: 180,
    width: 300,
  },
});

const ImageCard = ({ imagePath, title, text }) => {
  const classes = useStyles();
  return (
    <Box my={4}>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={imagePath}
            title={title}
          />
          {title && text && (
            <CardContent>
              {title && (
                <Typography gutterBottom variant="h5" component="h2">
                  {title}
                </Typography>
              )}
              {text && (
                <Typography variant="body2" color="textSecondary" component="p">
                  {text}
                </Typography>
              )}
            </CardContent>
          )}
        </CardActionArea>
      </Card>
    </Box>
  );
};

export default ImageCard;
