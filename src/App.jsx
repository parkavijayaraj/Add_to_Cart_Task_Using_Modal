import React, { useState } from 'react';
import Navbar from './Navbar';
import ProductList from './ProductList';
import Modal from './Modal'; // Modal for viewing cart items

const App = () => {
  const [cart, setCart] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addToCart = (product) => {
    if (cart.some(item => item.id === product.id)) {
      alert("Item already added to the cart");
    } else {
      setCart([...cart, product]);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  return (
    <div className="App">
      <Navbar cartCount={cart.length} openCart={() => setIsModalOpen(true)} />
      <ProductList addToCart={addToCart} />
      {isModalOpen && (
        <Modal
          cart={cart}
          removeFromCart={removeFromCart}
          closeModal={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default App;
