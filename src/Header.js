import React from "react";
import { IconButton, Avatar, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { ArrowDropDown, Apps, Notifications } from "@mui/icons-material";
import { useSelector, useDispatch } from "react-redux";
import { selectUserInfo, userLoggedOut } from "./features/userSlice";
import { auth } from "./firebase";
import "./Header.css";

function Header() {
  const user = useSelector(selectUserInfo);
  const dispatch = useDispatch();
  const [menuAnchor, setMenuAnchor] = React.useState(null);

  const handleMenuOpen = (event) => {
    setMenuAnchor(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchor(null);
  };

  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(userLoggedOut());
    });
  };

  return (
    <div className="header__body">
      <div className="header__left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img
          src="https://blog.logomyway.com/wp-content/uploads/2021/02/gmail-logo.jpg"
          alt="Gmail Logo"
        />
      </div>
      <div className="header__middle">
        <SearchIcon />
        <input
          placeholder="Search Email"
          className="header__input"
          type="text"
        />
        <ArrowDropDown />
      </div>
      <div className="header__right">
        <IconButton>
          <Apps />
        </IconButton>
        <IconButton>
          <Notifications />
        </IconButton>




        <Avatar
  onClick={handleMenuOpen}
  src={user?.photoUrl || "https://catchspaces.sfo2.digitaloceanspaces.com/devotepress/2019/02/Fahad-Murtaza-at-WordCamp-Biratnagar-2018.jpg"} // Provide a fallback image URL
  alt={user?.displayName}
/>
        <Menu
          anchorEl={menuAnchor}
          open={Boolean(menuAnchor)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={signOut}>Sign Out</MenuItem>
        </Menu>
      </div>
    </div>
  );
}

export default Header;
