import React from 'react';
import './App.css';
import 'antd/dist/reset.css';
import { Menu } from 'antd';
import Header from './PageElements/Header';

function App() {
  return (
  <>
  <Header />
  <div style={{display:'flex', flexDirection:'row', justifyContent:'left', alignContent:"flex-start"}}>
    <Menu items={[
      {label:"Home"},
      {label:"Add"},
      {label:"Search"}]}>
    </Menu>
    <div>Content</div>
  </div>
  </>
  );
}

export default App;



// // import { Route, Routes, useNavigate } from "react-router"
// 
// import { CssBaseline } from '@mui/material';

// export default function App() {
//   // const navigate = useNavigate()
//   return (
//     <React.Fragment>
//     {/* <CssBaseline /> */}
//     <Header />
//     {/* Sidebar */}
//     <div style={{ display: "flex", flexDirection: "column" }}>
//       <Menu
//       onClick={({key})=>{
//         navigate(key)
//       }}
//       items={[
//         {label: "Home", key: "1"},
//         {label: "Search Cable", key: "2"},
//         {label: "Add Cable", key: "3"}
//       ]}></Menu>
//       <Menu.Item key="1"> <Link to={`${this.props.match.url}/`}> Search </Link> </Menu.Item>
//       <Menu.Item key="2"> <Link to={`${this.props.match.url}/search`}> Search </Link> </Menu.Item>
//       <Menu.Item key="3"> <Link to={`${this.props.match.url}/add`}> Add </Link> </Menu.Item>

//       {/* <Content />  */}
//     </div>
//     {/* Inner Container */}
//     </React.Fragment>
//   );
// }

// // function Content() {
// //   return <div>
// //     <Routes>
// //       <Route path="/" element={<div>Home</div>}></Route>
// //       <Route path="/search" element={<div>Search</div>}></Route>
// //       <Route path="/add" element={<div>Add</div>}></Route>
// //     </Routes>
// //   </div>
// // }