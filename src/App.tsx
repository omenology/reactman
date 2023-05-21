import React from "react";

import { consolHelper } from "./utils";

import "./app.css";
import cssModule from './app.module.css'

const App = () => {
    console.log(cssModule)
    
    consolHelper()

    return (
    <div className={`bg-red-400 ${cssModule.fontcolor}`}>
      <h1>Hello world</h1>
    </div>
  );
};

export default App;
