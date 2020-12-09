import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper, Typography } from "@material-ui/core/";
import TextField from "@material-ui/core/TextField";
import { red } from "@material-ui/core/colors";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  chatZone: {
    width: "100%",
    borderStyle: "solid",
    borderColor: "red",
  },
  paper: {
    padding: 30,
  },
}));

function generate(element) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    })
  );
}

function Chat() {
  const classes = useStyles();
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);
  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Paper elevation={3} className={classes.paper}>
          <Typography variant="h6">Chat</Typography>
          <Grid item xs={12}>
            <div className={classes.demo}>
              <List dense={dense}>
                {generate(
                  <ListItem>
                    <ListItemText
                      primary="Single-line item"
                      secondary={secondary ? "Secondary text" : null}
                    />
                  </ListItem>
                )}
              </List>
            </div>
          </Grid>
          <Grid item xs={12}>
            <TextField
              className={classes.chatZone}
              id="outlined-multiline-static"
              label="Type here"
              multiline
              rows={1}
              style={{ width: 1000 }}
            />
          </Grid>
        </Paper>
      </Grid>
    </div>
  );
}

export default Chat;
