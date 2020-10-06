import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import {auth, provider} from "../../firebase";
import { useStateValue } from "../../StateManagement/StateProvider";
import { actionTypes } from "../../StateManagement/reducer";

export default function Login() {
  const[state, dispatch] = useStateValue();
  
  console.log(state, 'inside state')
    const signIn = () =>{
        auth.signInWithPopup(provider)
        .then(result => {
            console.log(result);
            dispatch({
              type: actionTypes.SET_USER,
              user: result.user,
            })
        })
        .catch((error) => alert(error.message))

    }
  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
          alt="facebook_logo"
        />
        <img src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg" alt="" />
        <Button type="submit" onClick={signIn} style={{backgroundColor: '#2e81f4'}}>
Sign In
        </Button>
      </div>
    </div>
  );
}
