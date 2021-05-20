import React from "react";

import { useSelector } from "react-redux";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

import { selectEmployeeLoading } from "./employeesSlice";
import EmployeeDetail from "./EmployeeDetail";
import EmployeesList from "./EmployeesList";

const Employees = () => {
  const employeeLoading = useSelector(selectEmployeeLoading);
  return (
    <Box>
      <Grid container direction="column">
        <Grid item>
          <EmployeeDetail />
        </Grid>
        <Grid item>
          <EmployeesList />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Employees;
