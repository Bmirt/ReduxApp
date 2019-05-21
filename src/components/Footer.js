import React, { Component } from "react";
import { connect } from "react-redux";

export class Footer extends Component {
  render() {
    return <div className="footer__container" />;
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer);
