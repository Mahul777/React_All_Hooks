import React, { useContext } from "react";
//import context is created in ContextTutorial
import { AppContext } from "./ContextTutorial";

function User() {
  //accessing the state from AppContext
  const { username } = useContext(AppContext);

  return (
    <div>
      <h1>User: {username}</h1>
    </div>
  );
}

export default User;