import React, { Component } from "react";
import { connect } from "react-redux";

class Toggle extends Component {
  render() {
    return (
      <div>
        {this.props.messageVisibility && (
          <p>You will be seeing this if I'm a beast</p>
        )}
        <button>Toggle me</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  messageVisibility: state.message.messageVisibility
});

export default connect(mapStateToProps)(Toggle);
