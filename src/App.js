// import React from "react";
// import { storiesOf } from "@storybook/react";
// import { action } from "@storybook/addon-actions";
// import './App.css';

// import Web from "./WebComponent";
// import App from "../../my-app/src/App";

// export const myProps = {
//   id: "1",
//   className: "mySampleClass",
//   sampleString: "Test Task",
//   sampleDate: new Date(2018, 0, 1, 9, 0)
// };

// export const actions = {
//   onActionOne: action("onActionOne"),
//   onActionTwo: action("onActionTwo")
// };

// storiesOf("Web", module)
//   .add("default", () => <Web {...myProps} {...actions} />)
//   .add("pinned", () => <Web {...myProps} pinned={true} {...actions} />)
//   .add("archived", () => <Web {...myProps} archived={true} {...actions} />);


import React from 'react';
import logo from './logo.svg';
//import './App.css';
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import WebComponent from './webComponent';
export const myProps = {
  id: "1",
  className: "mySampleClass",
  sampleString: "Test Task",
  sampleDate: new Date(2018, 0, 1, 9, 0)
};

export const actions = {
  onActionOne: action("onActionOne"),
  onActionTwo: action("onActionTwo")
};


function App() {
  return (
    <div>
   <WebComponent />
  </div>
  );
}

export default App;