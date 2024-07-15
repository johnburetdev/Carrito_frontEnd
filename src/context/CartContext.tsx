"use client";
import { useState, createContext, Children } from "react";

interface ProductCart {
  id: number;
  Marca: string;
  modelo: string;
  price: number;
  quantity: number;
}

interface ProductCartItem {
  id: number;
  Marca: string;
  modelo: string;
  price: number;
}

interface ProductCartContext {
  cartProducts: ProductCart[];
  addCartProducts: (product: ProductCartItem) => void;
  increaseQuantity: (id: number) => void;
  desceaseQuantity: (id: number) => void;
  totalQuantityPoduct: number;
  totaPriceProduct: number;
}

interface Props {
  children: React.ReactNode;
}

export const cartContext = createContext({} as ProductCartContext);

const CartProvider = ({ children }: Props) => {
  const [cartProducts, setCartProducts] = useState<ProductCart[]>([]);

  const addCartProducts = ({ id, Marca, modelo, price }: ProductCartItem) => {
    if (cartProducts.length === 0) {
      return setCartProducts([{ id, Marca, modelo, price, quantity: 1 }]);
    }
    const productExits = cartProducts.find((product) => product.id === id);

    if (!productExits) {
      return setCartProducts([
        ...cartProducts,
        { id, Marca, modelo, price, quantity: 1 },
      ]);
    }

    setCartProducts(
      cartProducts.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      })
    );
  };

  const increaseQuantity = (id: number) => {
    setCartProducts(
      cartProducts.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      })
    );
  };

  const desceaseQuantity = (id: number) => {
    if (cartProducts.find((item) => item.id === id)?.quantity === 1) {
      return setCartProducts(cartProducts.filter((item) => item.id !== id));
    }

    setCartProducts(
      cartProducts.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return item;
        }
      })
    );
  };

  const totalQuantityPoduct = cartProducts.reduce(
    (acc, item) => acc + item.quantity,
    0
  );
  const totaPriceProduct = cartProducts.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  return (
    <cartContext.Provider
      value={{
        cartProducts,
        addCartProducts,
        desceaseQuantity,
        increaseQuantity,
        totaPriceProduct,
        totalQuantityPoduct,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};
export default CartProvider;
