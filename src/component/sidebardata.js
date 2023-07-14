import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import LogoutIcon from '@mui/icons-material/Logout';

export const sidebardata=[
  {
    title:"HOME",
    icon: <HomeIcon/>,
    link:"/home"
  },
  {
    title:"CAB",
    icon: <LocalTaxiIcon/>,
    link:"/vehicle"
  },
  {
    title:"DRIVER",
    icon: <GroupAddIcon/>,
    link:"/driver"
  },
  {
    title:"SERVICE",
    icon: <HomeRepairServiceIcon/>,
    link:"/management"
  },
  {
    title:"LOGOUT",
    icon:<LogoutIcon/>,
    link:"/adminlogin"
  }
];
