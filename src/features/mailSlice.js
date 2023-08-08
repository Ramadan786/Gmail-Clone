import { createSlice } from "@reduxjs/toolkit";
export const mailSlice = createSlice({
  name: "mail",
  initialState: {
    selectMail:null,
    sendMessageIsOpen: false, // Change semicolon to a colon
  },
  reducers: 
  
  {
    selectOpenMail:(state, action)=>{
      state.selectMail=action.payload;
    },
    openSendMessage: (state) => {
      state.sendMessageIsOpen = true;
    },
    closeSendMessage: (state) => {
      state.sendMessageIsOpen = false;
    },
  },
});

export const { openSendMessage, closeSendMessage, selectOpenMail } = mailSlice.actions;
export const selectMail = (state) => state.mail.selectMail;
export const selectSendMessageIsOpen = (state) => state.mail.sendMessageIsOpen;

export default mailSlice.reducer;
