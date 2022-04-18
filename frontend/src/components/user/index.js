// import { PersonIcon } from '@mui/icons-material';
import PersonIcon from '@mui/icons-material/Person';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../sidebar';

const User = () => {

    const options=[
        {
            name:"Profile",
            icon:<PersonIcon/>,
            link:"/user/profile",

        }
    ]


  return (
    <div>
        <h1>User</h1>
        <Sidebar title="User Dashboard" options={options} >
        <Outlet />
        </Sidebar>
    </div>
  )
}

export default User;