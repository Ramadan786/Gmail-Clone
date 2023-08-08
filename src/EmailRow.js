import { CheckBox } from "@mui/icons-material";
import { IconButton} from '@mui/material';
import React from "react";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import './EmailRow.css'
import { useHistory } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { selectOpenMail }   from "./features/mailSlice";

function EmailRow({ id, title, subject, description, time }) {
  const dispatch= useDispatch();
  const history = useHistory();
  const openMail=()=>{
dispatch(
  selectOpenMail({
    id,
    title,
    subject,
    description,
    time,
  })
);
history.push("./mail")
  }
  return (
    <div  onClick={openMail} className="emailRow">
      {/* Use the new class emailRow__options-center for centering */}
      <div className="emailRow__options emailRow__options-center">
        <CheckBox className="checkBox" />
        <IconButton>
          <StarBorderIcon />
        </IconButton>
        <IconButton>
          <LabelImportantIcon />
        </IconButton>
      </div>
      <div className="emailRow__title">
{title}
      </div>
      <div className="emailRow__message">
        <h4>
          {subject}
          <span className="emailRow__description">{description}</span>
        </h4>
      </div>
      <div className="emailRow__time">
        {time}
      </div>
    </div>
  );
}

export default EmailRow;
