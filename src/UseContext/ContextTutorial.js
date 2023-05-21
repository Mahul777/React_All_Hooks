import React, { useState, createContext } from "react";
import Login from "./Login";
import User from "./User";

//context is a collection of state 
export const AppContext = createContext(null);

function ContextTutorial() {
  const [username, setUsername] = useState("");

  return (
     //passing the value of all the states
    <AppContext.Provider value={{ username, setUsername }}>
      <Login /> <User />
    </AppContext.Provider>
  );
}

export default ContextTutorial; 