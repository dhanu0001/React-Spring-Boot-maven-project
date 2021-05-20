import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import Button from "@material-ui/core/Button";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import DeleteIcon from "@material-ui/icons/Delete";
import CreateIcon from "@material-ui/icons/Create";
import { useDispatch, useSelector } from "react-redux";
import { selectEmployees, setDrawer } from "./employeesSlice";
import { deleteEmployee, getEmployee, getEmployees } from "./actions";

const useStyles = makeStyles({
  table: {
    overflow: "hidden",
  },
});

export default function EmployeesList() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const employees = useSelector(selectEmployees);

  useEffect(() => {
    dispatch(getEmployees());
  }, []);
  return (
    <TableContainer component={Paper} style={{ width: "99vw" }}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Employee First Name</TableCell>
            <TableCell align="right">Employee Last Name</TableCell>
            <TableCell align="right">Employee Email Id</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {((Array.isArray(employees) && employees.length > 0) === true
            ? employees
            : []
          ).map((row) => (
            <TableRow key={row.firstName}>
              <TableCell component="th" scope="row">
                {row.firstName}
              </TableCell>
              <TableCell align="right">{row.lastName}</TableCell>
              <TableCell align="right">{row.emailId}</TableCell>
              <TableCell align="right">
                <Button
                  onClick={() => {
                    dispatch(getEmployee(row.id));
                    dispatch(setDrawer(true));
                  }}
                >
                  <CreateIcon />
                </Button>
                <Button onClick={() => dispatch(deleteEmployee(row.id))}>
                  <DeleteIcon />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
