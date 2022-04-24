import React from 'react';
import {Outlet} from "react-router-dom";
import Sidebar from '../sidebar'
import { AccountCircleRounded, Dashboard, ManageAccounts } from "@mui/icons-material"
import LoginIcon from '@mui/icons-material/Login';  
import ManageAccountsRoundedIcon from '@mui/icons-material/ManageAccountsRounded';
import AdminPanelSettingsTwoToneIcon from '@mui/icons-material/AdminPanelSettingsTwoTone';


const Admin = () => {

    const options=[
        {
            name:"Profile",
            icon:<AccountCircleRounded/>,
            link:"/admin/profile",

        },
        {
            name:"DashBoard",
            icon:<Dashboard/>,
            link:"/admin/dashboard",

        },
        {
            name:"ManageEquipment",
            icon:<AdminPanelSettingsTwoToneIcon />,
            link:"/admin/manageequipment",

        },
        {
            name:"ManageUser",
            icon:<  ManageAccounts/>,
            link:"/admin/manageuser",

        },
        {
            name:"Add Equipment",
            icon:<AccountCircleRounded/>,
            link:"/admin/addequipment",

        },
        {
            name:"Signup",
            icon:<AccountCircleRounded/>,
            link:"/main/usersignup",

        },
        {
            name:"Login",
            icon:<LoginIcon/>,
            link:"/main/login",

        },
        {
            name:"Signup2",
            icon:<AccountCircleRounded/>,
            link:"/admin/signup1",

        },
    ]
  return (
    <div>
    <Sidebar title="Admin Dashboard" options={options} >

    <Outlet />
    </Sidebar>
    
    </div>
  )
}

export default Admin;