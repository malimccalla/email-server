import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Stripe from './Stripe';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return '';
      case false:
        return (
          <li>
            <a href="/auth/google">Login With Google</a>
          </li>
        );
      default:
        return [
          <li key="1">
            <Stripe />
          </li>,
          <li key="3">
            Credits: {this.props.auth.credits}
          </li>,
          <li key="2">
            <a href="/api/logout">Log out</a>
          </li>,
        ];
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link to={this.props.auth ? '/surveys' : '/'} className="left brand-logo">
            Emaily
          </Link>
          <ul className="right">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    );
  }
}

Header.propTypes = {
  auth: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};

Header.defaultProps = {
  auth: null,
};

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(mapStateToProps)(Header);
