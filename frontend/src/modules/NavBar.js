import React from "react";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import NotificationsIcon from "@material-ui/icons/Notifications";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.text.secondary,
    boxShadow: "none",
    marginTop: theme.spacing(2),
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    flexGrow: 1,
  },
}));

function NavBar() {
  const c = useStyles();

  return (
    <AppBar position="relative" className={c.root}>
      <Toolbar>
        <Box className={c.header}>EMP</Box>
        <Box>
          <IconButton aria-controls="simple-menu" aria-haspopup="true">
            <NotificationsIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
