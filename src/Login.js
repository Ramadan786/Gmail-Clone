import React from "react";
import { Button } from "@mui/material";
import { auth, provider } from "./firebase";
import { useDispatch } from "react-redux";
import { userLoggedIn } from "./features/userSlice";
import "./Login.css";

function Login() {
  const dispatch = useDispatch();

  const signIn = () => {
    auth.signInWithPopup(provider).then((result) => {
      const user = result.user;
      dispatch(
        userLoggedIn({
          displayName: user.displayName,
          email: user.email,
          photoUrl: user.photoURL,
        })
      );
    });
  };

  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://blog.logomyway.com/wp-content/uploads/2021/02/gmail-logo.jpg"
          alt=""
        />
        <Button
          onClick={signIn} // Corrected: Remove the parentheses
          variant="contained"
          color="primary"
          type="submit"
        >
          Login
        </Button>
      </div>
    </div>
  );
}

export default Login;
