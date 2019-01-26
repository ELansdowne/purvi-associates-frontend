import React, { PureComponent } from "react";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import { withStyles } from "@material-ui/core";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import ItemDialog from "../../../shared/dialog/item-dialog/item-dialog";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: "none"
  }
});

class Options extends PureComponent {
  addItem = () => {
    console.log("add item");
  };

  render() {
    const { classes, item } = this.props;
    return (
      <div>
        <ItemDialog item={item} />
        {/* <Button variant="contained" className={classes.button}>
        Remove Item
      </Button> */}
      </div>
    );
  }
}

export default withStyles(styles)(Options);
