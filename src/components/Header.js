import React, { Component } from "react";
import { connect } from "react-redux";

export class Header extends Component {
  render() {
    return (
      <div className="header__container">
        <h1>I am bad with Headers</h1>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
