import React from 'react';

const Layout = ({ children }) => {
  return (
    <>
      <div className='py-10 bg-zinc-900 h-full'>
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
