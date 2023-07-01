import * as React from 'react';
import { Menu } from "antd";
import "../CssStyles/SidebarStyle.css";


const Sidebar = () => {
  return (
    <div>
      <Menu
      items={[
        {label: "Home"},
        {label: "Search Cable"},
        {label: "Add Cable"}
      ]} />
    </div>
  )
}

export default Sidebar;