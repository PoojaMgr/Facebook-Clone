import React from "react";
import "./App.css";
import Header from "./modules/headers/Header";
import Sidebar from "./modules/Sidebar/Sidebar";
import Feed from "./modules/Feed/Feed";
import Widgets from "./modules/Widgets/Widgets";
import Login from "./modules/Login/Login";
import { useStateValue } from "./StateManagement/StateProvider";

const App = () => {
  debugger
  const [{ user }, dispatch] = useStateValue();
  
  return (
    <div className="app">
      {!user ? (
        <Login/>
      ) : (
        <>
          <Header />
          <div className="app__body">
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        </>
      )}
    </div>
  );
};

export default App;
