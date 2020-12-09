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
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20,
  },
  blocks: {
    
  },
  paper: {
    padding: 30,
  },
}));

function InGame() {
  const classes = useStyles();
  return (
    <Grid container className={classes.root} spacing={2} justify="space-evenly">
      <Grid item xs={8}>
        <Paper className={classes.paper} elevation={3}>
          <Game
            className={classes.blocks}
            style={{
              justify: "center",
              alignItems: "center",
              alignself: "center",
            }}
          />
        </Paper>
      </Grid>
      <Grid item xs={3}>
        <Ad />
      </Grid>

      <Grid
        item
        xs={12}
        className={classes.blocks}
      >
        <Chat className={classes.blocks}
        />
      </Grid>
    </Grid>
  );
}

export default InGame;
