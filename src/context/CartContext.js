import React, { createContext, useContext, useReducer } from 'react';

// Create CartContext
const CartContext = createContext();

// Reducer to handle cart actions
const cartReducer = (state, action) => {
    switch (action.type) {
        case 'INCREASE_QUANTITY':
            return state.map(item => {
                if (item.id === action.item.id) {
                    return { ...item, quantity: item.quantity + 1 }
                }
                return item;
            });
        case 'ADD_TO_CART':
            // Prevent duplicate entries
            if (!state.some((item) => item.id === action.item.id)) {
                return [...state, action.item];
            }
            return state
        case 'REMOVE_FROM_CART':
            const newState = state.filter((_, index) => index !== action.index);
            return newState;
        case 'CHECKOUT':
            return [];
        default:
            return state;
    }
};

export const CartProvider = ({ children }) => {
    const [cart, dispatch] = useReducer(cartReducer, []);

    const addToCart = (item) => {
        dispatch({ type: 'ADD_TO_CART', item });
    };
    
    const increaseCartItemQuantity = (item) => {
        dispatch({ type: 'INCREASE_QUANTITY', item });
    };

    const removeFromCart = (index) => {
        console.log('index; ', index)
        dispatch({ type: 'REMOVE_FROM_CART', index });
    };
    
    const checkoutFromCart = () => {
        dispatch({ type: 'CHECKOUT' });
    };

    const isInCart = (itemId) => {
        return cart.some((item) => item.id === itemId);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, isInCart, increaseCartItemQuantity, checkoutFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

// Custom hook to use CartContext
export const useCart = () => {
    return useContext(CartContext);
};
