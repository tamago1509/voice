import React, { useState } from "react";
import "./App.css";
import CardVideo from "./components/CardVideo";
import { ScriptProvider } from "./components/context/ScriptContext";

export default function App() {
  const [isShow, setShow] = useState(false);
  return (
    <div className="App">
      <ScriptProvider
        value={{
          isShow: isShow,
          setShow: (a) => setShow(a)
        }}
      >
        <CardVideo />
      </ScriptProvider>
    </div>
  );
}
