import React, { PureComponent } from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

const styles = {
  card: {
    width: 475,
    flex: 1,
    alignSelf: "center",
    marginLeft: "800px",
    marginTop: "400px"
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
};

class Login extends PureComponent {
  constructor() {
    super();
    this.state = {
      items: [],
      item: null,
      password: null,
      userName: null
    };
    this.handleChange = this.handleChange.bind(this);
  }

  login = () => {
    console.log("login", this.state.userName, this.state.password);
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h5" component="h2">
            Login
          </Typography>
          <TextField
            autoFocus
            required
            margin="dense"
            fullWidth
            label="User name"
            name="userName"
            value={this.state.userName}
            onChange={this.handleChange}
          />
          <br />
          <TextField
            autoFocus
            required
            fullWidth
            margin="dense"
            label="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
        </CardContent>
        <CardActions>
          <Button variant="contained" color="primary" onClick={this.login}>
            Login
          </Button>
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(styles)(Login);
