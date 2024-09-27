import React from 'react';

const MenuItem = ({ children, active }) => (
  <div className={`gap-2.5 self-stretch px-3 py-2 my-auto rounded-[360px] ${active ? 'bg-white bg-opacity-10' : ''}`}>
    {children}
  </div>
);

export default MenuItem;