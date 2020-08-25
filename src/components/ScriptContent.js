import React, { Component } from "react";
import ScriptContext from "./context/ScriptContext";
import { Button } from "antd";
import "antd/dist/antd.css";

class ScriptContent extends Component {
  render() {
    return (
      <>
        {this.context.isShow} && (
        <div className="script">
          <Button className="btn furigana" type="primary">
            Furigana
          </Button>
          <div className="script-content"></div>
        </div>
        ) )
      </>
    );
  }
}

ScriptContent.contextType = ScriptContext;
export default ScriptContent;
