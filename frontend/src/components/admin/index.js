import React from 'react';
import {Outlet} from "react-router-dom";
import Sidebar from '../sidebar'
import { AccountCircle, AccountCircleOutlined, AccountCircleRounded } from "@mui/icons-material"


const Admin = () => {

    const options=[
        {
            name:"Profile",
            icon:<AccountCircle/>,
            link:"/admin/profile",

        },
        {
            name:"ManageUser",
            icon:<AccountCircleOutlined/>,
            link:"/admin/profile",

        },
        {
            name:"Dashboard",
            icon:<AccountCircleRounded/>,
            link:"/admin/profile",

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