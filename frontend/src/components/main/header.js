import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AccountCircle, Subscriptions, ManageAccounts } from "@mui/icons-material"

const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [anchorElGuest, setAnchorElGuest] = useState(null);

  const [currentUser, setCurrentUser] = useState(null);

  const user = sessionStorage.getItem("user");

  useEffect(() => {
    setCurrentUser(JSON.parse(sessionStorage.getItem("user")));
  }, [user]);

  const navigate = useNavigate();

  const logout = () => {
    setAnchorElUser(null);
    sessionStorage.removeItem("user");
    navigate("/main/login");
  };

  const userMenu = [
    
    {
      name: "Profile",
      icon: <AccountCircle />,
      link: "/profile",
    },
    {
      name: "Manage Vlogs",
      icon: <Subscriptions />,
      link: "/managevlog",
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
    <div>Header</div>
  )
}

export default Header;