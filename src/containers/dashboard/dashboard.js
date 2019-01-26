import React, { PureComponent } from "react";
import Toolbar from "../../components/toolbar/toolbar";
import Items from "./items/items";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: "none"
  }
});

class Dashboard extends PureComponent {
  constructor() {
    super();
    this.state = {
      items: [],
      item: null,
      filter: null,
      userName: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.fillData = this.fillData.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    this.setState({ userName: "" });
    this.setState({ filter: "" });
    axios.get(`http://localhost:3000/items`).then(res => {
      const items = res.data;
      this.setState({ items });
    });
  };

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  searchClient = () => {
    console.log("searchclient", this.state.filter);
    if (this.state.filter) {
      let filteredItems = this.state.items.filter(
        value => value.cliendId === this.state.filter.trim()
      );
      console.log("filtertetiie", filteredItems, this.state.items);
      this.setState({ items: filteredItems });
    }
  };
  searchName = () => {
    if (this.state.userName) {
      console.log("searchname", this.state.userName);
      let filteredItems = this.state.items.filter(
        value => value.name === this.state.userName.trim()
      );
      this.setState({ items: filteredItems });
    }
  };
  resetData = () => {
    this.getData();
  };
  fillData() {
    console.log("====================================");
    console.log("heher fill");
    console.log("====================================");
    window.location.reload();
  }

  handleClick = item => {
    this.setState({ item });
    console.log("items received", item);
  };
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Toolbar item={this.state.item} />
        <TextField
          autoFocus
          required
          margin="dense"
          label=" Client ID "
          name="filter"
          value={this.state.filter}
          onChange={this.handleChange}
        />
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={this.searchClient}
        >
          Search client ID
        </Button>
        <TextField
          autoFocus
          required
          margin="dense"
          label="name"
          name="userName"
          value={this.state.userName}
          onChange={this.handleChange}
        />
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={this.searchName}
        >
          Search Name
        </Button>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          onClick={this.resetData}
        >
          Reset
        </Button>
        <Items items={this.state.items} handleClick={this.handleClick} />
      </div>
    );
  }
}

export default withStyles(styles)(Dashboard);
