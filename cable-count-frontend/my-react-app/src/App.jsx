import * as React from 'react';
import './App.css';
import Header from './PageElements/Header';
import Sidebar from './PageElements/Sidebar';
import { CssBaseline } from '@mui/material';
import { Route, Router, Routes } from 'react-router';

export default function App() {
  return (
    <React.Fragment>
      <CssBaseline />
        <Header />
        <BrowserRouter>
          <div>
            <Sidebar />
          </div>
          <div>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/add" element={<AddCable />}></Route>
              <Route path="/search" element={<SearchCable />}></Route>
            </Routes>
          </div>
        </BrowserRouter>
        
        Hello
    </React.Fragment>
  );
}

function Home() {
  return <h2> Home </h2>
}

function AddCable() {
  return <h2> Add Cable </h2>
}

function SearchCable() {
  return <h2> Search Cable </h2>
}
