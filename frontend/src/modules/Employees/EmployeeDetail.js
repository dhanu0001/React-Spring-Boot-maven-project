import React from "react";

import { useDispatch, useSelector } from "react-redux";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import { Formik, Form, Field } from "formik";
import { LinearProgress } from "@material-ui/core";
import { TextField } from "formik-material-ui";
import CloseIcon from "@material-ui/icons/Close";

import {
  selectDrawer,
  selectEmployee,
  setDrawer,
  setEmployee,
} from "./employeesSlice";
import { postEmployee, putEmployee } from "./actions";
const useStyles = makeStyles({
  list: {
    width: 400,
  },
  fullList: {
    width: "auto",
  },
});

const EmployeeDetail = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const employee = useSelector(selectEmployee);
  const drawer = useSelector(selectDrawer);
  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
    >
      <Formik
        initialValues={{
          firstName: employee?.firstName || "",
          lastName: employee?.lastName || "",
          emailId: employee?.emailId || "",
        }}
        enableReinitialize="true"
        validate={(values) => {
          const errors = {};

          // first name
          if (!values.firstName) {
            errors.firstName = "Required";
          }

          // last name
          if (!values.lastName) {
            errors.lastName = "Required";
          }

          // emailId
          if (!values.emailId) {
            errors.emailId = "Required";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          if (employee?.id) {
            dispatch(putEmployee({ values, id: employee?.id, setSubmitting }));
          } else {
            dispatch(postEmployee({ values, setSubmitting }));
          }
        }}
      >
        {({ submitForm, isSubmitting }) => (
          <Form>
            <Grid container alignItems="center" direction="column" spacing={1}>
              <Grid item container direction="column" spacing={1}>
                <Button
                  onClick={() => dispatch(setDrawer(false))}
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    margin: "1rem",
                  }}
                >
                  <CloseIcon />
                </Button>
              </Grid>
              <Grid item>
                {!!employee?.id === false ? "Create" : "Update"} Employee
              </Grid>
              <Grid item>
                <Field
                  component={TextField}
                  name="firstName"
                  type="text"
                  label=" First Name"
                  variant="outlined"
                />
              </Grid>
              <Grid item>
                <Field
                  component={TextField}
                  name="lastName"
                  type="text"
                  label=" Last Name"
                  variant="outlined"
                />
              </Grid>
              <Grid item>
                <Field
                  component={TextField}
                  name="emailId"
                  type="text"
                  label=" Email Id"
                  variant="outlined"
                />
              </Grid>
              {isSubmitting && <LinearProgress />}
              <Button
                variant="contained"
                color="primary"
                onClick={submitForm}
                size="large"
              >
                {!!employee?.id === false ? "Create " : "Update "}
                Employee
              </Button>
            </Grid>
          </Form>
        )}
      </Formik>
    </div>
  );

  return (
    <Box>
      <Grid container direction="column">
        <Grid item>
          <Button
            onClick={() => {
              dispatch(setDrawer(!drawer));
              dispatch(setEmployee());
            }}
            color="primary"
            variant="contained"
          >
            Add Employee
          </Button>
          <Drawer
            anchor={"right"}
            open={drawer}
            onClose={() => dispatch(setDrawer(false))}
          >
            {list("right")}
          </Drawer>
        </Grid>
      </Grid>
    </Box>
  );
};

export default EmployeeDetail;
