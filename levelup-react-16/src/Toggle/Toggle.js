import React from "react";
import { connect } from "react-redux";
import { toggleMessage } from "./actions";
import { getMovies } from "../Movies/actions";
import { bindActionCreators } from "redux";

const Toggle = ({ messageVisibility, toggleMessage, getMovies }) => (
  <div>
    {messageVisibility && <p>Sup Bruh</p>}
    <button onClick={toggleMessage}>Toggle me</button>
    <button onClick={getMovies}>Load Movies</button>
  </div>
);

const mapStateToProps = state => ({
  messageVisibility: state.message.messageVisibility
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      toggleMessage,
      getMovies
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Toggle);
