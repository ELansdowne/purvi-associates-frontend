import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Aux from "../../hoc/Auxi";
import Options from "./options/options";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const toolbar = props => {
  const { classes } = props;
  return (
    <Aux>
      <AppBar position="static" color="default" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Purvi Associates
          </Typography>
        </Toolbar>
        <Options item={props.item} />
      </AppBar>
    </Aux>
  );
};

const styles = theme => ({
  appBar: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  }
});

export default withStyles(styles)(toolbar);
