import React from "react";

const ScriptContext = React.createContext();

const ScriptProvider = ScriptContext.Provider;
const ScriptConsumer = ScriptContext.Consumer;

export { ScriptConsumer, ScriptProvider };
export default ScriptContext;
