import { Grid, Paper } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { CenterFocusStrong } from "@material-ui/icons";
import tic_tac_toe from "../images/tic_tac_toe.png";
import { blue } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "white",
  },
  paper: {
    height: 300,
    width: 300,
    fontSize: 30,
    display: "flex",
    backgroundColor: "lightgray",
    backgroundSize: "100% 100%",
    flexDirection: "column",
    justifyContent: "center",
    color: "white",
    margin: 100,
    textAlign: "center",
  },
}));

function Games() {
  const classes = useStyles();
  return (
    <Grid
      container
      justify="center"
      align="center"
      alignItems="center"
      className={classes.root}
      spacing={2}
    >
      <Grid item xs={12}>
        <Grid container justify="center" spacing={2}>
          <Paper
            className={classes.paper}
            component={Link}
            to="/ingame"
            style={{ backgroundImage: `url(${tic_tac_toe})` }}
          >
            Tic-Tac-Toe
          </Paper>
          <Paper className={classes.paper} component={Link} to="/home">
            Chess
          </Paper>
          <Paper className={classes.paper} component={Link} to="/home">
            Draughts
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Games;
