import React from "react";
import image from "./image.jpg";

export class Ad extends React.Component {
  render() {
    return (
      <div>
        <img src={image}></img>
      </div>
    );
  }
}
