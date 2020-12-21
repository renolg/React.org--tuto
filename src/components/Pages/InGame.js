import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { Grid, Paper } from "@material-ui/core/";
import { grey } from "@material-ui/core/colors";
import Game from "../Games/tic_tac_toe/game.js";
import Chat from "../subcomponents/Chat.js";
import Ad from "../subcomponents/Ad.js";
import { CenterFocusStrong } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 20,
  },
  blocks: {
    padding: 0,
  },
  paper: {
    display: "flex",
    padding: 30,
    justifyContent: "center",
  },
}));

function InGame() {
  const classes = useStyles();
  return (
    <Grid container className={classes.root} spacing={2} justify="space-evenly">
      <Grid item xs={8} className={classes.blocks}>
        <Paper className={classes.paper} elevation={3}>
          <Game />
        </Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper className={classes.paper} elevation={3}>
          <Ad />
        </Paper>
      </Grid>

      <Grid item xs={12} className={classes.blocks}>
        <Paper className={classes.paper} elevation={3}>
          <Chat />
        </Paper>
      </Grid>
    </Grid>
  );
}

export default InGame;
