import React from 'react';
import MobileMenu from '../#components/MobileMenu.jsx';
import Message from '../#components/Message.jsx';

const _notFound = () => (
  <div className="page not-found">
    <nav>
      <MobileMenu/>
    </nav>
    <div className="content-scrollable">
      <Message title="Page not found"/>
    </div>
  </div>
);

export default _notFound;
