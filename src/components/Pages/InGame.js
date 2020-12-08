import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { Grid, Paper } from "@material-ui/core/";
import { grey } from "@material-ui/core/colors";

import Game from "../Games/tic_tac_toe/game.js";
import Chat from "../subcomponents/Chat.js";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20,
  },
  main: {
    // backgroundColor: "lightgrey",
  },
  paper: {
    padding: 30,
  },
}));

function InGame() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid
        container
        direction="column"
        className={classes.main}
        bgcolor="primary"
        spacing={5}
        justify="center"
        alignItems="center"
      >
        <Grid item xs={12}>
          <Grid container direction="row" justify="space-evenly">
            <Paper className={classes.paper} elevation={3}>
              <Game />
            </Paper>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container direction="row" justify="space-evenly">
            <Chat />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default InGame;
