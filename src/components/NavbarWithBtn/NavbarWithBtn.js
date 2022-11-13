import { Link } from "react-router-dom";
import "../NavbarWithBtn/NavbarWithBtn.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";

const NavbarWithBtn = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" className="app-bar">
          <Toolbar>
            {/* <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton> */}
            <Typography
              className="header"
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              <Link className="links" to="/">
                <span className="the">The</span>
                <span className="title">Siren</span>
              </Link>
            </Typography>
            <Button color="inherit">Get Started</Button>
          </Toolbar>
        </AppBar>
      </Box>
      {/* <nav className="navbar-with-btn">
        <Link className="links" to="/">
          <header className="header">
            <span className="the">The</span>
            <span className="title">Siren</span>
          </header>
        </Link>
        <button className="btn-get-started">Get Started</button>
      </nav> */}
    </>
  );
};

export default NavbarWithBtn;
