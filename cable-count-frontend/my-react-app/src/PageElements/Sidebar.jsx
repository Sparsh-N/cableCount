import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import '../CssStyles/HeaderStyle.css';

const Sidebar = () => {
    return (
      <React.Fragment>
        <div className='d-flex flex-column'>
            <ul className='nav nav-pills flex-column p-0 m-0'>
                <li className='nav-item py-1'>
                    <Link to="/add" className='nav-link text-white'>
                        <span className='fs-5'>Add Cable</span>
                    </Link>
                </li>
                <li className='nav-item p-1'>
                    <a href="" className='nav-link text-white'>
                        <span className='fs-5'>Search Cable</span>
                    </a>
                </li>
            </ul>
        </div>
      </React.Fragment>
    )
  }
  
export default Sidebar;