import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Switch from "@mui/material/Switch";
import { Link, useNavigate } from "react-router-dom";
import { useThemeContext } from "../../context/ThemeContextProvide";

const pages = [
  { name: "All Jokes", path: "/" },
  { name: "Random Joke", path: "/random" },
  { name: "Create Joke", path: "/create" },
];

function ResponsiveAppBar({ user, setUser }) {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const { mode, toggleTheme } = useThemeContext();
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleProfile = () => {
    navigate("/profile")
  }
  const handleSettings = () => {
    navigate("/settings")
  }
  const handleLogout = () => {
    // Clear user state and localStorage
    setUser(null);
    localStorage.removeItem("user");
    handleCloseUserMenu();

    // Redirect to home page or login
    navigate("/");
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        width: "100%",
        bgcolor: "background.paper",
        color: "text.primary",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            JOKES
          </Typography>

          {/* Mobile Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <Link
                      to={page.path}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      {page.name}
                    </Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Desktop Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                sx={{ my: 2, color: "inherit", display: "block" }}
                component={Link}
                to={page.path}
              >
                {page.name}
              </Button>
            ))}
          </Box>

          {/* Dark Mode Switch */}
          <Box sx={{ flexGrow: 0, display: "flex", alignItems: "center" }}>
            <Typography variant="body2" sx={{ mr: 1 }}>
              {mode === "light" ? "Light" : "Dark"} Mode
            </Typography>
            <Switch onChange={toggleTheme} checked={mode === "dark"} />
          </Box>

          {/* Sign In/Sign Up or User Avatar */}
          {user ? (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="User Avatar" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElUser}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem onClick={handleProfile}>
                  <Typography textAlign="center">Profile</Typography>
                </MenuItem>
                <MenuItem onClick={handleSettings}>
                  <Typography textAlign="center">Settings</Typography>
                </MenuItem>
                <MenuItem onClick={handleLogout}>
                  <Typography textAlign="center">Logout</Typography>
                </MenuItem>
              </Menu>
            </Box>
          ) : (
            <Box sx={{ flexGrow: 0, display: "flex", gap: 1 }}>
              <Button
                variant="outlined"
                component={Link}
                to="/signin"
                sx={{ color: "inherit", borderColor: "inherit" }}
              >
                Sign In
              </Button>
              <Button
                variant="contained"
                component={Link}
                to="/signup"
                sx={{
                  bgcolor: "primary.main",
                  color: "primary.contrastText",
                }}
              >
                Sign Up
              </Button>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
