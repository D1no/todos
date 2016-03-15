import React from 'react';
import mobileMenuToggle from '../../#components/mobileMenuToggle';

// a common layout wrapper for auth pages
const _auth = ({ content, link }) => (
  <div className="page auth">
    <nav>
      <mobileMenuToggle/>
    </nav>
    <div className="content-scrollable">
      {content}
      {link}
    </div>
  </div>
);

_auth.propTypes = {
  content: React.PropTypes.element,
  link: React.PropTypes.element,
};

export default _auth;
