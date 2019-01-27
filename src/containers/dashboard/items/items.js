import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    padding: theme.spacing.unit * 5,
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  },
  row: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default
    }
  }
});

function Items(props) {
  const { classes, items, handleClick } = props;
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <CustomTableCell>Client Id</CustomTableCell>
            <CustomTableCell align="right">Name</CustomTableCell>
            <CustomTableCell align="right">Address</CustomTableCell>
            <CustomTableCell align="right">State</CustomTableCell>
            <CustomTableCell align="right">Phone</CustomTableCell>
            <CustomTableCell align="right">Owner name</CustomTableCell>
            <CustomTableCell align="right">Class</CustomTableCell>
            <CustomTableCell align="right">TM Name</CustomTableCell>
            <CustomTableCell align="right">Applied No.</CustomTableCell>
            <CustomTableCell align="right">Date</CustomTableCell>
            <CustomTableCell align="right">Ref Form</CustomTableCell>
            <CustomTableCell align="right">Statement</CustomTableCell>
            <CustomTableCell align="right">Balance</CustomTableCell>
            <CustomTableCell align="right">Examination</CustomTableCell>
            <CustomTableCell align="right">Statement</CustomTableCell>
            <CustomTableCell align="right">File</CustomTableCell>
            <CustomTableCell align="right">J No</CustomTableCell>
            <CustomTableCell align="right">Opp</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map(row => {
            return (
              <TableRow
                className={classes.row}
                key={row.id}
                onClick={() => handleClick(row)}
              >
                <CustomTableCell component="th" scope="row">
                  {row.cliendId}
                </CustomTableCell>
                <CustomTableCell align="right">{row.name}</CustomTableCell>
                <CustomTableCell align="right">{row.address}</CustomTableCell>
                <CustomTableCell align="right">{row.state}</CustomTableCell>
                <CustomTableCell align="right">{row.phone}</CustomTableCell>
                <CustomTableCell align="right">{row.ownerName}</CustomTableCell>
                <CustomTableCell align="right">{row.class}</CustomTableCell>
                <CustomTableCell align="right">{row.tmName}</CustomTableCell>
                <CustomTableCell align="right">{row.appliedNo}</CustomTableCell>
                <CustomTableCell align="right">{row.date}</CustomTableCell>
                <CustomTableCell align="right">{row.refForm}</CustomTableCell>
                <CustomTableCell align="right">{row.statement}</CustomTableCell>
                <CustomTableCell align="right">{row.advance}</CustomTableCell>
                <CustomTableCell align="right">
                  {row.examination}
                </CustomTableCell>
                <CustomTableCell align="right">{row.file}</CustomTableCell>
                <CustomTableCell align="right">{row.jNo}</CustomTableCell>
                <CustomTableCell align="right">{row.opp}</CustomTableCell>
                <CustomTableCell align="right">{row.goods}</CustomTableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

Items.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Items);
