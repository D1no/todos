import React from 'react';
import mobileMenueToggle from '../../#components/mobileMenuToggle';
import message from '../../#components/message';

const _notFound = () => (
  <div className="page not-found">
    <nav>
      <mobileMenueToggle/>
    </nav>
    <div className="content-scrollable">
      <message title="Page not found"/>
    </div>
  </div>
);

export default _notFound;
