import React from "react";
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton, Avatar } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import './Header.css'
import { ArrowDropDown } from "@mui/icons-material";
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
function Header() {
  return (
    <div className="header__body">
      <div className="header__left">
        <IconButton>
        <MenuIcon/>
        </IconButton>
        <img src="https://blog.logomyway.com/wp-content/uploads/2021/02/gmail-logo.jpg"

        alt=""   />


    
      </div>
      <div className="header__middle">

       <SearchIcon/>
        <input placeholder="Search Email"  className="header__input" />
        <ArrowDropDown />     
      
      </div>
      <div className="header__right">
    <IconButton>
    <AppsIcon/>
    </IconButton>
    <IconButton>
    <NotificationsIcon/>
    </IconButton>
    <Avatar/>


      </div>
    </div>
  );
}
export default Header;

