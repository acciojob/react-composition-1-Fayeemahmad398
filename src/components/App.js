import React from "react";
import "./../styles/App.css";
import Tabs from "./Tabs"
const arr = [
  { content: "Tab1", title: "Tab1" },
  { content: "Tab2", title: "Tab2" },
  { content: "Tab3", title: "Tab3" },
];
const App = () => {
  return (
    <div>
      <Tabs arr={arr} />
    </div>
  );
};

export default App;
