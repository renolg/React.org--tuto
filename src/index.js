import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Game } from "./game.js";
import { Ad } from "./Ad.js";
import { Chat } from "./Chat.js";
import { Grid, Paper } from "@material-ui/core";

class PageRenderer extends React.Component {
  render() {
    return (
      <div className="Row">
        <Grid
          container
          direction="column"
          justify="space-between"
          alignItems="flex-start"
          spacing={10}
        >
          <Grid
            container
            direction="row"
            justify="flex-start"
            spacing={3}
            item
            xs={12}
          >
            <Grid>
              <button>Home</button>
            </Grid>
            <Grid>
              <Ad></Ad>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container direction="row" justify="center">
              <Paper elevation={3}>
                <Game></Game>
              </Paper>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Paper elevation={3}>
              <Chat></Chat>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(<PageRenderer />, document.getElementById("root"));
