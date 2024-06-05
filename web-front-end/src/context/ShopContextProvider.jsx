import React, { createContext, useEffect, useState } from 'react';

export const ShopContext = createContext(null);

const getDefaultCart = (products) => {
  let cart = {};
  products.forEach(product => {
    cart[product.id] = 0;
  });
  return cart;
};

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/products');
        const data = await response.json();
        setProducts(data.data);
        setCartItems(getDefaultCart(data.data)); 
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  const getTotalItemsCount = () => {
    return Object.values(cartItems).reduce((acc, itemCount) => acc + itemCount, 0);
  };

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: (prev[itemId] || 0) + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: (prev[itemId] || 0) - 1 }));
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const checkout = () => {
    setCartItems(getDefaultCart(products));
  };

  const contextValue = {
    cartItems,
    addToCart,
    updateCartItemCount,
    removeFromCart,
    getTotalItemsCount,
    checkout,
    products,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {!loading ? props.children : <p>Loading...</p>}
    </ShopContext.Provider>
  );
};
