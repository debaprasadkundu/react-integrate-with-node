import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

function App() {
  useEffect(() => {
    axios
      .get("http://localhost:3001/api/data")
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {});
  }, []);

  return <div className="App"></div>;
}

export default App;
