import React, { useEffect, useState } from "react";
import "./EmailList.css";
import Section from "./Section";
import EmailRow from "./EmailRow";
import InboxIcon from "@mui/icons-material/Inbox";
import PeopleIcon from "@mui/icons-material/People";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import { Checkbox, IconButton } from "@mui/material";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import RedoOutlinedIcon from "@mui/icons-material/RedoOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import KeyboardHideOutlinedIcon from "@mui/icons-material/KeyboardHideOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { db } from "./firebase";

function EmailList() {
  const [emails, setEmails] = useState([]);
  console.log(emails);
  useEffect(() => {
    const unsubscribe = db
      .collection("emails")
      .orderBy("timestamp", "desc")
      .onSnapshot((querySnapshot) => {
        const emailList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }));
        setEmails(emailList);
      });

    return () => unsubscribe(); // Cleanup the snapshot listener when the component unmounts
  }, []);

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
        <Section Icon={PeopleIcon} title="Social" color="green" />
        <Section Icon={LocalOfferIcon} title="Promotion" color="#006699" />
      </div>

      <div className="emailList__List">
        {emails.map((email) => (
          <EmailRow
            key={email.id}
            title={email.data.to}
            subject={email.data.subject}
            description={email.data.message}
           // time={email.data.timestamp ? email.data.timestamp.toDate() : null}
            time={email.data.timestamp ? email.data.timestamp.toDate().toLocaleString() : null}
              
          />
        ))}
      </div>
    </div>
  );
}

export default EmailList;
