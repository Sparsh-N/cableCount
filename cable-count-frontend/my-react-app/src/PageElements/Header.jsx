import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import '../CssStyles/HeaderStyle.css';

export const Header = () => {
    return (
      <AppBar>
          <Toolbar>
            <img src="src/Images/header_image.svg" class="filter-white" height={40} width={40} />
            <Typography marginLeft={1} color="white" variant="h6" fontSize={26} textAlign={'center'} component="div">
              Cable Count
            </Typography>
          </Toolbar>
      </AppBar>
    )
  }
  
export default Header;