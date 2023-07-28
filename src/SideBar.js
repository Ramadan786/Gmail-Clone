import React from "react";
import "./SideBar.css";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import InboxIcon from "@mui/icons-material/Inbox";
import SidebarOption from "./SidebarOption";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import SendIcon from "@mui/icons-material/Send";
import DraftsIcon from "@mui/icons-material/Drafts";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import DuoOutlinedIcon from "@mui/icons-material/DuoOutlined";
import { Phone } from "@mui/icons-material";
import { IconButton } from "@mui/material";
function SideBar() {
  return (
    <div className="sidebar">
      <Button
        className="sidebar__compose"
        startIcon={<AddIcon fontSize="large" />}
      >
        Compose
      </Button>
      <SidebarOption
        Icon={InboxIcon}
        title="Inbox"
        number={59}
        selected={true}
      />
      <SidebarOption
        Icon={StarBorderOutlinedIcon}
        title="Starter"
        number={12}
      />
      <SidebarOption Icon={AccessTimeIcon} title="Snoozed" number={34} />
      <SidebarOption Icon={LabelImportantIcon} title="Impportant" number={59} />
      <SidebarOption Icon={SendIcon} title="Send" number={12} />
      <SidebarOption Icon={DraftsIcon} title="Draft" number={34} />
      <SidebarOption Icon={ExpandMoreOutlinedIcon} title="More" number={34} />
      <div className="sidebar__footer">
        <div className="sidebar__footerIcons">
          <IconButton>
            <Person2OutlinedIcon />
          </IconButton>
          <IconButton>
            <DuoOutlinedIcon />
          </IconButton>
          <IconButton>
            <Phone />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
