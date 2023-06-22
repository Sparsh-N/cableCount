import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Menu } from "antd";
import "../CssStyles/SidebarStyle.css";


const Sidebar = () => {
  return (
    <div class="navbar" style={{display:'flex', flexDirection: 'row'}}>
      <Menu 
      items={[
        { label: "Home"},
        { label: "Search Cable"},
        { label: "Add Cable"}
        ]}
        ></Menu>
    </div>
  )
}

export default Sidebar;