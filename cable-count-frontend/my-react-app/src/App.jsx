import React, { useState, useEffect } from 'react';
import './App.css';
import { Menu } from 'antd';
import Header from './PageElements/Header';
import { SearchBarForm } from './PageElements/SearchPage/SearchBar';

function App() {
  const [cables, setCables] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCables();
  }, []);

  const fetchCables = async () => {
    try {
      const response = await fetch('cables');
      if (response.ok) {
        const data = await response.json();
        setCables(data);
        setError(null);
      } else {
        setError('Failed to fetch cables');
      }
    } catch (error) {
      setError('Error fetching cables');
    }
  };

  const addCable = async (newCable) => {
    try {
      const response = await fetch('/api/cables/save', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newCable),
      });

      if (response.ok) {
        fetchCables(); // Refresh cables after adding a new one
        setError(null);
      } else {
        setError('Failed to add cable');
      }
    } catch (error) {
      setError('Error adding cable');
    }
  };

  const deleteCable = async (toDelete) => {
    try {
      const response = await fetch(`/api/cables/${toDelete.id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        fetchCables(); // Refresh cables after deleting one
        setError(null);
      } else {
        setError('Failed to delete cable');
      }
    } catch (error) {
      setError('Error deleting cable');
    }
  };

  return (
    <>
      <Header />
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'left', alignContent: 'flex-start' }}>
        <Menu items={[
          { label: "Home", onClick: fetchCables },
          { label: "Add", onClick: () => addCable({ /* cable details */ }) },
          { label: "Search" }
        ]}>
        </Menu>
        <div>Content</div>
        <SearchBarForm />
      </div>
      {error && <div>Error: {error}</div>}
      <div>
        {/* Display cables */}
        {cables.map(cable => (
          <div key={cable.id}>{cable.name}</div>
        ))}
      </div>
    </>
  );
}

export default App;


// import React from 'react';
// import './App.css';
// import 'antd/dist/reset.css';
// import { Menu } from 'antd';
// import Header from './PageElements/Header';
// import { SearchBarForm } from './PageElements/SearchPage/SearchBar'
// import Button from '@mui/material/Button';

// function App() {
//   return (
//   <>
//   <Header />
//   <div style={{display:'flex', flexDirection:'row', justifyContent:'left', alignContent:"flex-start"}}>
//     <Menu items={[
//       {label:"Home"},
//       {label:"Add"},
//       {label:"Search"}]}>
//     </Menu>
//     <div>Content
//     </div>
//     <SearchBarForm />
//   </div>
//   </>
//   );
// }

// export default App;



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