import React from 'react';

const Navbar = ({ cartCount, openCart }) => {
  return (
    <nav className="navItem">
      <h1 className="nav">Shopping Store</h1>
      <button onClick={openCart}>Cart ({cartCount})</button>
    </nav>
  );
};

export default Navbar;
