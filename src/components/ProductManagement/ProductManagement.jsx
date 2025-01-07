import React, { useState } from 'react';
import '../ProductManagement/productmanagement.css';

const ProductManagement = () => {
  const [cart, setCart] = useState([]);

  const products = [
    { id: 1, name: 'LAPTOP', price: 49999 , image: require('../../assets/image1.jpg')},
    { id: 2, name: 'MOBILE', price: 123999, image: require('../../assets/image2.jpg') },
    { id: 3, name: 'EARBUDS', price: 4999, image: require('../../assets/image3.jpg') },
  ];

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.id !== productId)
    );
  };

  const updateQuantity = (productId, amount) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId
          ? { ...item, quantity: Math.max(item.quantity + amount, 1) }
          : item
      )
    );
  };

  const addToWishlist = (product) => {
    alert(`${product.name} added to wishlist!`);
  };

  return (
    <div className="product-management">
      <h1 className="title">Product Management</h1>
      <div className="products">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <div className="product-image-container">
              <img src={product.image} alt={product.name} className="product-image" />
            </div>
            <div className="product-details">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">${product.price.toFixed(2)}</p>
              <div className="product-actions">
                <button className="wishlist-button" onClick={() => addToWishlist(product)}>
                  <i className="fas fa-heart"></i> Wishlist
                </button>
                <button className="add-to-cart-button" onClick={() => addToCart(product)}>
                  <i className="fas fa-cart-plus"></i> Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
  

      <div className="cart">
        <h2 className="cart-title">Shopping Cart</h2>
        {cart.length > 0 ? (
          cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <div className="cart-image-container">
                <img src={item.image} alt={item.name} className="cart-image" />
              </div>
              <div className="cart-details">
                <h4 className="cart-item-name">{item.name}</h4>
                <p className="cart-item-price">${item.price.toFixed(2)}</p>
                <div className="quantity-controls">
                  <button
                    className="quantity-button decrease"
                    onClick={() => updateQuantity(item.id, -1)}
                  >
                    -
                  </button>
                  <span className="quantity">{item.quantity}</span>
                  <button
                    className="quantity-button increase"
                    onClick={() => updateQuantity(item.id, 1)}
                  >
                    +
                  </button>
                </div>
                <button
                  className="remove-button"
                  onClick={() => removeFromCart(item.id)}
                >
                  <i className="fas fa-trash"></i> Remove
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="empty-cart-message">Your cart is empty.</p>
        )}
      </div>
      
    </div>
  );
};

export default ProductManagement;
