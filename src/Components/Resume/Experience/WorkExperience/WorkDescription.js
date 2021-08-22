import React, { Component } from "react";

class WorkDescription extends Component {
  render() {
    return this.props.workItems.map((item) => (
      <li style={listItemStyle} class="">
        {item}
      </li>
    ));
  }
}

const listItemStyle = {
  textAlign: "left",
  color: "white"
};

export default WorkDescription;
