import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 5,
    tags: ["tag1", "tag2", "tag3"],
  };

  styles = {
    fontSize: 10,
    fontWeight: "bold",
  };

  getRender() {
    if (this.state.tags.length === 0) return <p>There are no tags</p>;

    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button style={this.styles} className={this.getButtonClasses()}>
          +
        </button>

        <button style={this.styles} className={this.getButtonClasses()}>
          -
        </button>

        <button style={this.styles} className="bnt btn-danger btn-sm">
          Delete
        </button>
      </div>
    );
  }
  render() {
    return (
      <React.Fragment>
        {this.state.tags.length === 0 && "please create a new tag"}
        {this.getRender()}
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-3 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  getButtonClasses() {
    let classes = "btn btn-secondary btn-sm m-2";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "zero" : count;
  }
}

export default Counter;
