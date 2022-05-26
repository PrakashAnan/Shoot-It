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
import {
  AccountCircle,
  AppRegistration,
  Home,
  Login,
  MoreVert,
  Subscriptions,
  ShoppingCart
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { ListItemIcon, ListItemText } from "@mui/material";
import { useEffect, useState } from "react";
import "./header.css"

const pages = [
  {
    name: "Explore Product",
    link: "/main/listproduct",
  },
];

const guestUser = [
  {
    name: "Home",
    link: "/main/home",
    icon: <Home />,
  },
  {
    name: "Login",
    link: "/main/login",
    icon: <Login />,
  },
  {
    name: "Signup",
    link: "/main/usersignup",
    icon: <AppRegistration />,
  },
  {
    name: "AddToCart",
    link: "/main/checkout",
    icon: <ShoppingCart />,
  },
];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [anchorElGuest, setAnchorElGuest] = useState(null);

  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem("user")));
  const [currentAdmin, setCurrentAdmin] = useState(JSON.parse(sessionStorage.getItem('admin')));


  const navigate = useNavigate();

  const logout = () => {
    setAnchorElUser(null);
    sessionStorage.removeItem("user");
    navigate("/main/login");
  };

  const showAdmin = () => {
    if (currentAdmin !== null)
      return <Button
        onClick={(e) => navigate("/admin/addequipment")}
        sx={{ my: 2, color: "white", display: "block" }}
      >
        Add Equipment
      </Button>
  }

  const userMenu = [

    {
      name: "signup",
      icon: <AccountCircle />,
      link: "/main/usersignup",
    },
    {
      name: "Login",
      icon: <Subscriptions />,
      link: "/main/login",
    },
    {
      name: "Logout",
      icon: <AccountCircle />,
      click: logout,
    },
  ];

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

  return (
    <div>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              className="shoot"
              variant="h4"
              fontFamily="cursive"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            >
              Shoot'IT'
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
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
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map(({ name, link }) => (
                  <MenuItem key={name} onClick={(e) => navigate(link)}>
                    <Typography textAlign="center">{name}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            >

            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map(({ name, link }) => (
                <Button
                  key={name}
                  onClick={(e) => navigate(link)}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {name}
                </Button>
              ))}
              {showAdmin()}
            </Box>
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              {guestUser.map(({ name, link, icon }) => (
                <Tooltip title={name}>
                  <IconButton
                    size="large"
                    color="inherit"
                    onClick={(e) => navigate(link)}
                    sx={{ mr: 2 }}
                  >
                    {icon}
                  </IconButton>
                </Tooltip>
              ))}
            </Box>
            {currentUser !== null && (
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {userMenu.map(({ name, icon, link, click }) => (
                    <MenuItem
                      key={name}
                      onClick={link ? (e) => navigate(link) : click}
                    >
                      <ListItemIcon>{icon}</ListItemIcon>
                      <ListItemText>{name}</ListItemText>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            )}
            <Box sx={{ flexGrow: 0, ml: 3, display: { xs: "flex", md: "none" } }}>
              <Tooltip title="User Options">
                <IconButton
                  onClick={(e) => setAnchorElGuest(e.currentTarget)}
                  sx={{ p: 0 }}
                  color="inherit"
                >
                  <MoreVert />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElGuest}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElGuest)}
                onClose={(e) => setAnchorElGuest(null)}
              >
                {guestUser.map(({ name, icon, link }) => (
                  <MenuItem key={name} onClick={(e) => navigate(link)}>
                    <ListItemIcon>{icon}</ListItemIcon>
                    <ListItemText>{name}</ListItemText>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};
export default Header;