import React from "react";
import { connect } from "react-redux";
const Toggle = ({ messageVisibility, dispatch }) => (
  <div>
    {messageVisibility && <p>Sup Bruh</p>}
    <button
      onClick={() =>
        dispatch({
          type: "TOGGLE_MESSAGE"
        })
      }
    >
      Toggle me
    </button>
  </div>
);

const mapStateToProps = state => ({
  messageVisibility: state.message.messageVisibility
});

export default connect(mapStateToProps)(Toggle);
