
import React, { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import "./App.css";
import FastChatting from "./FastChatting";
import { selectUser, login, logout } from "./features/userSlice";
import Login from "./Login";
import { auth} from "./firebase"

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(authUser =>{
      if (authUser){
        //user is logged in
        dispatch(login({
          uid: authUser.uid,
          photo: authUser.photoURL,
          email:authUser.email,
          displayName: authUser.displayName,
        }))
      }else{
        //user is logged out
        dispatch(logout({
          uid: "",
          photo: "",
          email: "",
          displayName: "",
        }))
      }
    })
  }, []);

  return (
    <div className="App">
      {user ? <FastChatting/> : <Login/>}
      

import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import FastChatting from "./FastChatting";
import { SelectUser } from "./features/UserSlice";
function App() {
  const user = useSelector(SelectUser);
  return (
    <div className="app">
      {user ? <FastChatting></FastChatting> : <h2>You need to login</h2>}

    </div>
  );
}

export default App;
