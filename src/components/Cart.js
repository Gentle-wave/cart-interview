import React, { useCallback, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';

const CartPage = () => {
  const { carts: cartItems } = useLoaderData();
  const { removeFromCart, addToCart, cart, checkoutFromCart } = useCart();

  const removeCartItem = useCallback(async (item, index) => {
    try {
      removeFromCart(index)
      toast.warn(`${item.name} removed from cart 🗑️`, {
        position: "top-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
    });
      // console.log('the route; ', `https://ncwpb75s-3000.euw.devtunnels.ms/cart/${item.id}`)
      const req = await fetch(`${process.env.REACT_APP_API_URL}/cart/delete`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ productId: item.id })
      })
      const res = await req.json()

      console.log('remove response;', res)
    }
    catch (error) {
      console.log('error removing from cart ; ', error.message)
    }
  }, [removeFromCart])

  useEffect(() => {
    if (cart.length === 0 && cartItems.length > 0) {
      cartItems?.forEach(cart => {
        addToCart(cart)
      })
    }
  }, [])


  const handleCheckout = async () => {
    try {
      checkoutFromCart()
      toast.info(`Checkout complete! 🎉 Thank you for your purchase.`, {
        position: "top-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
    });
      const req = await fetch(`${process.env.REACT_APP_API_URL}/cart/checkout`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
      })
      const res = await req.json()

      console.log('check out res; ', res)
    }
    catch (error) {
      //errror
    }
  }


  return (
    <div className="container mx-auto p-4 min-h-[90vh]">
      <div className='flex w-full justify-between items-center'>
        <h2 className="text-3xl font-semibold mb-4">Your Cart</h2>
        {cart?.length> 0 && <button onClick={handleCheckout} className='p-2 bg-green-400 text-white rounded-lg'>Checkout 🛒</button>}
      </div>
      {cart.length === 0 ? (
        <p className="text-lg text-gray-500">Your cart is empty</p>
      ) : (
        <ul className="space-y-4">
          {cart.map((item, index) => (
            <li
              key={index}
              className="flex items-center justify-between p-4 border-b border-gray-200"
            >
              <div className="flex items-center">
                <img
                  src={item.image || item.images[0]}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-medium">{item.name}</h3>
                  <p className="text-gray-600">${item.price}</p>
                </div>
              </div>
              <div className='flex flex-col items-center'>
                <button
                  className="text-red-500 hover:text-red-700 font-semibold"
                  onClick={() => removeCartItem(item, index)}
                >
                  Remove
                </button>
                <p className='mt-1'>{item.quantity}</p>
              </div>
            </li>
          ))}
        </ul>
      )}

    </div>
  );
};

export default CartPage;
