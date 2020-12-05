import { Grid } from "@material-ui/core";
import React from "react";
import "./Presentation.css";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Image_background from "../images/image-img-1.png";
import Paper from "@material-ui/core/Paper";

// const styles = {
//   paperContainer: {
//     descriptionCard: {
//       backgroundImage: `url(${Image_background})`,

//       width: "100%",
//     },
//   },
// };

const useStyles = makeStyles({
  root: {
    color: "black",
  },
  title: {
    color: "white",
  },
});

function Presentation() {
  const classes = useStyles();
  return (
    <div className="presentation-class">
      {/* <Paper style={styles.paperContainer.descriptionCard}>
        <h1 align="center" justify="center">
          Have fun with your friends
        </h1>
      </Paper> */}
      <Typography className={classes.title} variant="h3">
        Have Fun with Friends
      </Typography>
    </div>
  );
}

export default Presentation;
