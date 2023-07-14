import React from "react";
import { useState } from "react";
const Tabs = (props) => {
  const [content, setContent] = useState("Tab1");

  return (
    <div>
      <ul>
        {props.arr.map((obj, index) => (
          <li
            key={index}
            onClick={() => {
              setContent(obj.title);
            }}
          >
            {obj.title}
          </li>
        ))}
      </ul>

      <p>This is the content for {content}</p>
    </div>
  );
};

export default Tabs;
