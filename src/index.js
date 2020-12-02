import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Board, Game } from "./game.js";
import { Ad } from "./Ad.js";
import { Chat } from "./Chat.js";

class PageRenderer extends React.Component {
  render() {
    return (
      <div>
        <Ad></Ad>
        <Game></Game>
        <Chat></Chat>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(<PageRenderer />, document.getElementById("root"));
