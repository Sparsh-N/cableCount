import * as React from 'react';
import './App.css';
import Header from './PageElements/Header';
import 'antd/dist/reset.css';
import { Menu } from "antd";
// import { Route, Routes, useNavigate } from "react-router"
import Sidebar from './PageElements/Sidebar';
import { CssBaseline } from '@mui/material';

export default function App() {
  // const navigate = useNavigate()
  return (
    <React.Fragment>
    {/* <CssBaseline /> */}
    <Header />
    {/* Sidebar */}
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Menu
      onClick={({key})=>{
        navigate(key)
      }}
      items={[
        {label: "Home"},
        {label: "Search Cable"},
        {label: "Add Cable"}
      ]}></Menu>
      {/* <Content />  */}
    </div>
    {/* Inner Container */}
    </React.Fragment>
  );
}

// function Content() {
//   return <div>
//     <Routes>
//       <Route path="/" element={<div>Home</div>}></Route>
//       <Route path="/search" element={<div>Search</div>}></Route>
//       <Route path="/add" element={<div>Add</div>}></Route>
//     </Routes>
//   </div>
// }