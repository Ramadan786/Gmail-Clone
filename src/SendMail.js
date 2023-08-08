import React from "react";
import "./SendMail.css";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "./features/mailSlice";
import { db, auth } from "./firebase"; // Import only 'db' and 'auth'
import firebase from "firebase"; 

function SendMail() {
  const dispatch = useDispatch();
  const handleComposeClick = () => {
    console.log("just clicked");
    dispatch(closeSendMessage());
  };
  const { handleSubmit, register, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    db.collection("emails").add({
      to: data.to,
      subject: data.subject,
      message: data.message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    console.log(data);
  };

  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>New Message</h3>
        <CloseIcon className="sendMail__close" onClick={handleComposeClick} />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("to", { required: "To is required" })}
          name="to"
          placeholder="To."
          type="email"
        />
        {errors.to && <p className="sendMail__error">{errors.to.message}</p>}
        <input
          {...register("subject", { required: "Subject is required" })}
          name="subject"
          placeholder="Subject"
          type="text"
        />
        {errors.subject && <p className="sendMail__error">{errors.subject.message}</p>}
        <input
          {...register("message", { required: "Message is required" })}
          name="message"
          className="sendMail__message"
          placeholder="Message..."
          type="text"
        />
        {errors.message && <p className="sendMail__error">{errors.message.message}</p>}
        <div className="sendMail__options">
          <Button
            className="sendMail__send"
            variant="contained"
            color="primary"
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}
export default SendMail;
