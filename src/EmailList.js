import React from "react";
import "./EmailList.css";
import Section from "./Section";
import InboxIcon from "@mui/icons-material/Inbox";
import PeopleIcon from '@mui/icons-material/People';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import { Checkbox, IconButton } from "@mui/material";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import RedoOutlinedIcon from "@mui/icons-material/RedoOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import KeyboardHideOutlinedIcon from "@mui/icons-material/KeyboardHideOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
function EmailList() {
  return (
    <div className="emailList">
      <div className="emailList__settings">
        <div className="emailList__settingLeft">
          <Checkbox />
          <IconButton>
            <ArrowDropDownOutlinedIcon />
          </IconButton>
          <IconButton>
            <RedoOutlinedIcon />
          </IconButton>
          <IconButton>
            <MoreVertOutlinedIcon />
          </IconButton>
        </div>

        <div className="emailList__settingsRight">
          <IconButton>
            <ChevronLeftOutlinedIcon />
          </IconButton>
          <IconButton>
            <ChevronRightOutlinedIcon />
          </IconButton>
          <IconButton>
            <KeyboardHideOutlinedIcon />
          </IconButton>
          <IconButton>
            <SettingsOutlinedIcon />
          </IconButton>
        </div>
      </div>
      <div className="emailList__section">
      <Section Icon={InboxIcon} title="primary" color="red" selected />
      <Section Icon={PeopleIcon} title="Social" color="green"  />
      <Section Icon={LocalOfferIcon} title="Promotion" color="#006699"/>
      </div>
    </div>
  );
}

export default EmailList;
