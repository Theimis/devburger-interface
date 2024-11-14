import { useContext, createContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);

  const putProductIncart = (product) => {
    const cartIndex = cartProducts.findIndex((prd) => prd.id === product.id);

    let newProductsIncart = [];
    if (cartIndex >= 0) {
      newProductsIncart = cartProducts;

      newProductsIncart = [...cartProducts];
      newProductsIncart[cartIndex].quantity += 1;

      setCartProducts(newProductsIncart);
    } else {
      product.quantity = 1;
      newProductsIncart = [...cartProducts, product];
      setCartProducts(newProductsIncart);
    }
    updateLocalStorage(newProductsIncart);
  };

  const clearCart = () => {
    setCartProducts([]);

    updateLocalStorage([]);
  };

  const deleteProduct = (productId) => {
    const newCart = cartProducts.filter((prd) => prd.id !== productId);

    setCartProducts(newCart);
    updateLocalStorage(newCart);
  };

  const increaseProduct = (productId) => {
    const newCart = cartProducts.map((prd) => {
      return prd.id === productId
        ? { ...prd, quantity: prd.quantity + 1 }
        : prd;
    });

    setCartProducts(newCart);
    updateLocalStorage(newCart);
  };

  const decreaseProduct = (productId) => {
    const cartIndex = cartProducts.findIndex((prd) => prd.id === productId);

    if (cartProducts[cartIndex].quantity > 1) {
      const newCart = cartProducts.map((prd) => {
        return prd.id === productId
          ? { ...prd, quantity: prd.quantity - 1 }
          : prd;
      });

      setCartProducts(newCart);
      updateLocalStorage(newCart);
    } else {
      deleteProduct(productId);
    }
  };

  const updateLocalStorage = (products) => {
    localStorage.setItem('devburger:cartInfo', JSON.stringify(products));
  };

  useEffect(() => {
    const clientCartData = localStorage.getItem('devburger:cartInfo');

    if (clientCartData) {
      setCartProducts(JSON.parse(clientCartData));
    }
  }, []);

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        putProductIncart,
        clearCart,
        decreaseProduct,
        increaseProduct,
        deleteProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart must be used with a context'); // Corrigido
  }

  return context;
};
