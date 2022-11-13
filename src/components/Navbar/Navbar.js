import { useState, useRef } from "react";
import React from "react";
import "../Navbar/Navbar.css";
import { Outlet, NavLink } from "react-router-dom";
import Divider from "@mui/material/Divider";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
// import IconButton from "@mui/material/IconButton";
// import Menu from "@mui/icons-material/Menu";
// import MenuIcon from "@mui/icons-material/Menu";
// import Button from "@mui/material/Button";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Stack from "@mui/material/Stack";

// import MenuItem from "@mui/material/MenuItem";
// import ListItemIcon from "@mui/material/ListItemIcon";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <>
      <Box sx={{ flexGrow: 1 }} className="app-bar">
        <AppBar position="fixed">
          <Toolbar>
            <Typography
              className="logo"
              variant="h1"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              <Link className="links" to="/">
                <span className="the">The</span>
                <span className="title">Siren</span>
              </Link>
            </Typography>

            <Stack direction="row" spacing={2}>
              <div>
                <Button
                  // className="menu"
                  ref={anchorRef}
                  id="composition-button"
                  aria-controls={open ? "composition-menu" : undefined}
                  aria-expanded={open ? "true" : undefined}
                  aria-haspopup="true"
                  onClick={handleToggle}
                >
                  {/* <span className="menu">
                    <img
                      className="menu-logo"
                      src="./menu-bar.png"
                      alt="Menu"
                    />
                  </span> */}
                  <span className="menu">☰</span>
                  {/* <img className="menu-logo" src="../Navbar/hamburger.png" alt="Menu" /> */}
                </Button>

                <Popper
                  open={open}
                  anchorEl={anchorRef.current}
                  role={undefined}
                  placement="bottom-start"
                  transition
                  disablePortal
                >
                  {({ TransitionProps, placement }) => (
                    <Grow
                      {...TransitionProps}
                      style={{
                        transformOrigin:
                          placement === "bottom-start"
                            ? "left top"
                            : "left bottom",
                      }}
                    >
                      <Paper>
                        <ClickAwayListener onClickAway={handleClose}>
                          <MenuList
                            className="menu-list"
                            autoFocusItem={open}
                            id="composition-menu"
                            aria-labelledby="composition-button"
                            onKeyDown={handleListKeyDown}
                          >
                            <MenuItem onClick={handleClose}>
                              <NavLink className="nav-links" to="/">
                                Home
                              </NavLink>
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                              <NavLink className="nav-links" to="/Bollywood">
                                Bollywood
                              </NavLink>
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                              <NavLink className="nav-links" to="/Technology">
                                Technology
                              </NavLink>
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                              <NavLink className="nav-links" to="/Hollywood">
                                Hollywood
                              </NavLink>
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                              <NavLink className="nav-links" to="/Fitness">
                                Fitness
                              </NavLink>
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                              <NavLink className="nav-links" to="/Food">
                                Food
                              </NavLink>
                            </MenuItem>
                          </MenuList>
                        </ClickAwayListener>
                      </Paper>
                    </Grow>
                  )}
                </Popper>
              </div>
            </Stack>
          </Toolbar>
        </AppBar>
      </Box>

      <nav className="navbar">
        <header className="logo">
          <span className="the">The</span>
          <span className="title">Siren</span>
        </header>
        {/* <button className="hamburger">
          <img src="./hamburger.png" alt="Hamburger" />
        </button> */}
        <ul className="list">
          <li>
            <NavLink className="nav-links" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-links" to="/Bollywood">
              Bollywood
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-links" to="/Technology">
              Technology
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-links" to="/Hollywood">
              Hollywood
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-links" to="/Fitness">
              Fitness
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-links" to="/Food">
              Food
            </NavLink>
          </li>
        </ul>
      </nav>
      <Divider variant="middle" />

      <Outlet />
    </>
  );
};

export default Navbar;
