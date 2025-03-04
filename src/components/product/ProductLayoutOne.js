import React from 'react'
import { useCart } from '../../context/CartContext';
import { toast } from 'react-toastify';

const ProductLayoutOne = ({ product }) => {
    const { addToCart, isInCart, increaseCartItemQuantity } = useCart();
    const { name, images, image, description, price, id } = product
    const firstImage = image ?? images[0] ?? ''
    const secondImage = image ?? images[1] ?? ''
    const added = isInCart(id)

    const handleAddToCart = async () => {
        try {
            if (!added) addToCart({ ...product, quantity: 1 })
            if (added) increaseCartItemQuantity(product)
                toast.success(`${name} added to cart! 🛒`, {
                    position: "top-left",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
            const req = await fetch(`${process.env.REACT_APP_API_URL}/cart`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ productId: id })
            })
            const res = await req.json()

            console.log('cart response;', res)

        }
        catch (error) {
            console.log('error adding to card: ', error.message)
        }
    }

    return (
        <div className='group group-hover:shadow-2xl: h-full aspect-video flex rounded-md overflow-hidden shadow-sm bg-white p-2 relative'>
            <div className='group-hover:scale-105 duration-300 transition-all flex w-full h-full'>
                <img src={firstImage} className='w-[60%] object-contain h-full  rounded-tl-md rounded-bl-md' alt={name} />
                <img src={secondImage} className=' w-[40%] object-contain h-full  rounded-tl-md rounded-bl-md' alt={name} />
            </div>
            <div className='bg-gradient-to-b from-transparent to-black absolute inset-0 p-2 flex flex-col justify-end'>
                <h2 className='text-shadow text-xl lg:text-2xl text-white font-bold font-mono line-clamp-1'>{name}</h2>
                <p className='text-xs text-gray-50 sm:text-sm font-serif line-clamp-2'>{description}</p>
                <div className='flex text-white items-center justify-between '>
                    <div className='flex items-center gap-2'>
                        <p className='text-sm font-thin'>N{price}</p>
                    </div>

                    <button onClick={handleAddToCart} className=" bg-purple-600 justify-self-end text-white text-xs font-thin px-2 py-1 rounded w-fit hover:scale-105 duration-300 transition-all">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductLayoutOne
