import React, { Component } from "react";
import { connect } from "react-redux";

export class Header extends Component {
  render() {
    return <div className="header__container" />;
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);