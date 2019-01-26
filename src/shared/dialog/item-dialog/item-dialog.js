import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { withStyles } from '@material-ui/core';
import axios from 'axios';

const styles = theme => ({
  button: {
    marginRight: theme.spacing.unit
  },
  delete: {
    marginRight: theme.spacing.unit * 40
  },
  input: {
    display: 'none'
  }
});

class ItemDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      clientId: '',
      name: '',
      address: '',
      state: '',
      phone: '',
      ownerName: '',
      class: '',
      tmName: '',
      appliedNo: '',
      date: '',
      refForm: '',
      statement: '',
      advance: '',
      examination: '',
      file: '',
      jNo: '',
      opp: '',
      goods: '',
      balance: '',
      open: false,
      update: false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleClickOpen = () => {
    this.resetForm();
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  componentWillReceiveProps(nextProps) {
    const { item } = nextProps;
    if (nextProps.item) {
      this.setState({ update: true });
      this.setFormData(item);
    }
  }

  setFormData = item => {
    console.log('item received child', item);
    this.setState({ open: true });
    this.setState({ clientId: item.cliendId });
    this.setState({ id: item.id });
    this.setState({ name: item.name });
    this.setState({ address: item.address });
    this.setState({ state: item.state });
    this.setState({ phone: item.phone });
    this.setState({ ownerName: item.ownerName });
    this.setState({ class: item.class });
    this.setState({ tmName: item.tmName });
    this.setState({ appliedNo: item.appliedNo });
    this.setState({ date: item.date });
    this.setState({ refForm: item.refForm });
    this.setState({ statement: item.statement });
    this.setState({ advance: item.advance });
    this.setState({ examination: item.examination });
    this.setState({ file: item.file });
    this.setState({ jNo: item.jNo });
    this.setState({ opp: item.opp });
    this.setState({ goods: item.goods });
  };

  resetForm = () => {
    this.setState({ open: true });
    this.setState({ clientId: '' });
    this.setState({ id: '' });
    this.setState({ name: '' });
    this.setState({ address: '' });
    this.setState({ state: '' });
    this.setState({ phone: '' });
    this.setState({ ownerName: '' });
    this.setState({ class: '' });
    this.setState({ tmName: '' });
    this.setState({ appliedNo: '' });
    this.setState({ date: '' });
    this.setState({ refForm: '' });
    this.setState({ statement: '' });
    this.setState({ advance: '' });
    this.setState({ examination: '' });
    this.setState({ file: '' });
    this.setState({ jNo: '' });
    this.setState({ opp: '' });
    this.setState({ goods: '' });
  };

  handleChange(event) {
    console.log('here is', [event.target.name], event.target.value);
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  deleteItem = () => {
    axios
      .delete('http://localhost:3000/items/' + this.state.id, {})
      .then(result => {
        console.log('result', result);
        this.setState({ open: false });
        window.location.reload();
      })
      .catch(error => {
        console.log(error);
      });
  };

  submitData = () => {
    if (
      this.state.name.length > 0 &&
      this.state.address.length > 0 &&
      this.state.state.length > 0 &&
      this.state.phone.length > 0 &&
      this.state.ownerName.length > 0 &&
      this.state.class.length > 0 &&
      this.state.tmName.length > 0 &&
      this.state.appliedNo.length > 0 &&
      this.state.date.length > 0 &&
      this.state.refForm.length > 0 &&
      this.state.statement.length > 0
    ) {
      this.setState({ open: false });
      if (this.state.update) {
        axios
          .put('http://localhost:3000/items/' + this.state.id, {
            cliendId: this.state.clientId,
            name: this.state.name,
            address: this.state.address,
            state: this.state.state,
            phone: this.state.phone,
            ownerName: this.state.ownerName,
            class: this.state.class,
            tmName: this.state.tmName,
            appliedNo: this.state.appliedNo,
            date: this.state.date,
            refForm: this.state.refForm,
            statement: this.state.statement,
            advance: this.state.advance,
            examination: this.state.examination,
            file: this.state.file,
            jNo: this.state.jNo,
            opp: this.state.opp,
            goods: this.state.goods,
            balance: this.state.balance
          })
          .then(response => {
            console.log('done');
            window.location.reload();
          })
          .catch(error => {
            console.log(error);
          });
      } else {
        axios
          .post('http://localhost:3000/items', {
            cliendId: 'CL' + parseInt(Math.random() * 10000),
            name: this.state.name,
            address: this.state.address,
            state: this.state.state,
            phone: this.state.phone,
            ownerName: this.state.ownerName,
            class: this.state.class,
            tmName: this.state.tmName,
            appliedNo: this.state.appliedNo,
            date: this.state.date,
            refForm: this.state.refForm,
            statement: this.state.statement,
            advance: this.state.advance,
            examination: this.state.examination,
            file: this.state.file,
            jNo: this.state.jNo,
            opp: this.state.opp,
            goods: this.state.goods,
            balance: this.state.balance
          })
          .then(response => {
            console.log('done');
            window.location.reload();
          })
          .catch(error => {
            console.log(error);
          });
      }
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Button
          variant="contained"
          color="secondary"
          onClick={this.handleClickOpen}
          className={classes.button}
        >
          ADD ITEM
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Add Item</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To add Item, please enter your details here. We will updates
              occasionally.
            </DialogContentText>
            <div>
              <TextField
                autoFocus
                required
                margin="dense"
                label="Name"
                name="name"
                value={this.state.name}
                fullWidth
                onChange={this.handleChange}
              />
              <TextField
                autoFocus
                required
                margin="dense"
                id="address"
                label="Address"
                name="address"
                value={this.state.address}
                fullWidth
                onChange={this.handleChange}
              />
              <TextField
                autoFocus
                required
                margin="dense"
                id="state"
                label="State"
                name="state"
                value={this.state.state}
                fullWidth
                onChange={this.handleChange}
              />
              <TextField
                autoFocus
                required
                margin="dense"
                id="phone"
                label="Phone"
                name="phone"
                value={this.state.phone}
                fullWidth
                onChange={this.handleChange}
              />
              <TextField
                autoFocus
                required
                margin="dense"
                id="ownerName"
                label="ownerName"
                name="ownerName"
                value={this.state.ownerName}
                fullWidth
                onChange={this.handleChange}
              />
              <TextField
                autoFocus
                required
                margin="dense"
                id="class"
                label="class"
                name="class"
                value={this.state.class}
                fullWidth
                onChange={this.handleChange}
              />
              <TextField
                autoFocus
                required
                margin="dense"
                id="tmName"
                label="tmName"
                name="tmName"
                value={this.state.tmName}
                fullWidth
                onChange={this.handleChange}
              />
              <TextField
                autoFocus
                required
                margin="dense"
                id="appliedNo"
                label="appliedNo"
                name="appliedNo"
                value={this.state.appliedNo}
                fullWidth
                onChange={this.handleChange}
              />
              <TextField
                autoFocus
                required
                margin="dense"
                id="date"
                label="date"
                name="date"
                value={this.state.date}
                fullWidth
                onChange={this.handleChange}
              />
              <TextField
                autoFocus
                required
                margin="dense"
                id="refForm"
                label="refForm"
                name="refForm"
                value={this.state.refForm}
                fullWidth
                onChange={this.handleChange}
              />
              <TextField
                autoFocus
                required
                margin="dense"
                id="statement"
                label="statement"
                name="statement"
                value={this.state.statement}
                fullWidth
                onChange={this.handleChange}
              />
              <TextField
                autoFocus
                required
                margin="dense"
                id="advance"
                label="advance"
                name="advance"
                value={this.state.advance}
                fullWidth
                onChange={this.handleChange}
              />
              <TextField
                autoFocus
                required
                margin="dense"
                id="balance"
                label="balance"
                name="balance"
                value={this.state.balance}
                fullWidth
                onChange={this.handleChange}
              />
              <TextField
                autoFocus
                required
                margin="dense"
                id="examination"
                label="examination"
                name="examination"
                value={this.state.examination}
                fullWidth
                onChange={this.handleChange}
              />
              <TextField
                autoFocus
                required
                margin="dense"
                id="file"
                label="file"
                name="file"
                value={this.state.file}
                fullWidth
                onChange={this.handleChange}
              />
              <TextField
                autoFocus
                required
                margin="dense"
                id="jNo"
                label="jNo"
                name="jNo"
                value={this.state.jNo}
                fullWidth
                onChange={this.handleChange}
              />
              <TextField
                autoFocus
                required
                margin="dense"
                id="opp"
                label="opp"
                name="opp"
                value={this.state.opp}
                fullWidth
                onChange={this.handleChange}
              />
              <TextField
                autoFocus
                required
                margin="dense"
                id="goods"
                label="goods"
                name="goods"
                value={this.state.goods}
                fullWidth
                onChange={this.handleChange}
              />
            </div>
          </DialogContent>
          <DialogActions>
            <Button
              variant="contained"
              color="secondary"
              className={classes.delete}
              onClick={() => this.deleteItem()}
              disabled={!this.state.update}
            >
              Remove
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.submitData} color="primary">
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(ItemDialog);
