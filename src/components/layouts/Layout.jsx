import React from 'react';

const Layout = ({ children }) => {
  return (
    <>
      <div className='py-10 bg-zinc-900 h-screen'>
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
