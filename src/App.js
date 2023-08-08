import React,{useEffect} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";
import Mail from "./Mail";
import EmailList from "./EmailList";
import "./App.css";
import SendMail from "./SendMail";
import { useSelector, useDispatch } from "react-redux";
import { selectSendMessageIsOpen } from "./features/mailSlice";
import { userLoggedIn, userLoggedOut, selectUserInfo } from "./features/userSlice";
import Login from "./Login";
import { auth } from "./firebase";



function App() { 
  const user = useSelector(selectUserInfo);
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const { displayName, email, photoURL } = user;
        dispatch(userLoggedIn({ displayName, email, photoURL }));
      } else {
        dispatch(userLoggedOut());
      }
    });

    return () => {
      unsubscribe();
    };
  }, [dispatch]);

  const handleUserLogin = (userData) => {
    dispatch(userLoggedIn(userData));
  };

  const handleUserLogout = () => {
    dispatch(userLoggedOut());
  };

  return (
    <Router>
      {!user ? (
        <Login onUserLogin={handleUserLogin} />
      ) : (
        <div className="app">
          <Header onUserLogout={handleUserLogout} />
          <div className="app__body">
            <SideBar />
            <Switch>
              <Route path="/mail" component={Mail} />
              <Route path="/" component={EmailList} />
            </Switch>
          </div>
          {sendMessageIsOpen && <SendMail />}
        </div>
      )}
    </Router>
  );
}

export default App;
