import React from "react";
import "./App.css";
import SideBar from "./components/SideBar/SideBar";
import SimpleReduxExample from "./Examples/SimpleReduxExample";

const App: React.FC = (): JSX.Element => {
  const items: string[] = ["Home", "About", "Login", "Contacts"];

  return (
    <div className="wrapper">
      <div className="left">
        <SideBar items={items} />
      </div>
      <div className="right">
        <SimpleReduxExample />
      </div>
    </div>
  );
};

export default App;
