import React from 'react';

const Modal = ({ cart, removeFromCart, closeModal }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button onClick={closeModal}>Close</button>
        <h2>Your Cart</h2>
       <div className="Model-card">
          {cart.map(item => (
            <div key={item.id} className="Model-card1">
              <img src={item.image} alt={item.title} className="productimage" />
              <h3>{item.title}</h3>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}
        </div>
        <p>Total items: {cart.length}</p>
      </div>
    </div>
  );
};

export default Modal;
