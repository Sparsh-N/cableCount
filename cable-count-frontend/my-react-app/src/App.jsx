import * as React from 'react';
import './App.css';
import Header from './PageElements/Header';
import Sidebar from './PageElements/Sidebar';
import { CssBaseline } from '@mui/material';

export default function App() {
  return (
    <React.Fragment>
      <CssBaseline />
        <Header />
        {/* Sidebar */}
        <Sidebar />
        {/* Inner Container */}
        Hello
    </React.Fragment>
  );
}
