import React, { Component } from "react";
import { Link } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Badge from "@material-ui/core/Badge";
import IconButton from "@material-ui/core/IconButton";
import {
  HomeRounded,
  PersonRounded,
  CreateRounded,
  NotificationsActiveRounded,
} from "@material-ui/icons";

export class Navbar extends Component {
  render() {
    return (
      <AppBar>
        <Toolbar className="nav-container">
          <IconButton color="inherit" component={Link} to="/">
            <HomeRounded />
          </IconButton>
          <IconButton color="inherit" component={Link} to="/login">
            <PersonRounded />
          </IconButton>
          <IconButton color="inherit" component={Link} to="/signup">
            <CreateRounded />
          </IconButton>
          <IconButton aria-label="show 11 new notifications" color="inherit">
            <Badge badgeContent={11} color="secondary">
              <NotificationsActiveRounded />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Navbar;
