import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {},
  title: {},
  TextField: {
    margin: theme.spacing(1),
    width: "100ch",
  },
}));

function generate(element) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    })
  );
}

export function Chat(props) {
  const classes = useStyles(props);
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);
  return (
    <div className={classes.root}>
      <Grid container direction="column">
        <Grid item xs={12}>
          <Typography variant="h6" className={classes.title}>
            Chat
          </Typography>
        </Grid>
        <Grid item xs={12}>
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
        </Grid>
        <Grid item xs={12}>
          <form className={classes.TextField} noValidate autoComplete="off">
            <TextField id="standard-basic" label="Type here" />
          </form>
        </Grid>
      </Grid>
    </div>
  );
}
