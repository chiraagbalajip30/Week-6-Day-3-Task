import { createContext, useState } from "react";

// 1️⃣ Create the context
export const cartContext = createContext();

// 2️⃣ Create the Provider component
const CartProvider = ({ children }) => {
    // 3️⃣ Global cart state
    const [cartItems, setCartItems] = useState([]);

    // 4️⃣ Action: add item to cart
    const addToCart = (product) => {
        setCartItems((prevItems) => [...prevItems, product]);
    };

    // 5️⃣ Action: remove item from cart
    // const removeFromCart = (product) => {
    //     setCartItems((prevItems) => prevItems.filter((item) => item.id !== product.id));
    // };

    // 6️⃣ Return the Provider component
    return (
        <cartContext.Provider value={{cartItems, addToCart}}>
            {children}
        </cartContext.Provider>
    );
}

export default CartProvider;