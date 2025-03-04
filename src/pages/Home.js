import { useEffect, useState } from 'react';
// import allProduct from '../data'
import ProductLayoutOne from '../components/product/ProductLayoutOne';
import { useLoaderData } from 'react-router-dom';
import { useCart } from '../context/CartContext';


export default function Home() {
  const { products: allProduct, carts } = useLoaderData()
  const {addToCart} = useCart()

  const [category, setCategory] = useState("Categories");
  const [product, setProduct] = useState("New Product");
  const categories = ["Electronics", "Fashion", "Books"];
  const products = ["Latest", "Popular", "Upcoming"];

  useEffect(() => {
    carts?.forEach(cart => {
      addToCart(cart)
    })
  }, [addToCart, carts])



  return (
    <div className="mx-auto mb-16">
      {/* Hero Section with Carousel */}
      <div className="relative h-[30rem] sm:h-[28rem] lg:h-96 bg-gray-200  overflow-hidden shadow-lg">
        <img
          src={require('../assets/pexels-asphotograpy-94843.jpg')}
          alt="ecommerce carousel"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center pt-10">

          <div className=" mt-10 px-6 flex flex-col justify-center items-center gap-5 w-full">
            <h1 className="text-white text-center text-4xl font-bold">
              Welcome to ShopMagic<br />
              Discover the Best products
            </h1>
            <p className="text-white text-center text-lg mb-6">
              ShopMagic is your one-stop destination for the latest and greatest in fashion, electronics, and accessories. We bring you a carefully curated collection of top products from around the world, all at unbeatable prices.
            </p>
          </div>

          <button className='py-2 px-10 bg-white rounded-full font-semibold hover:scale-105 transition duration-300'>Start Shopping</button>

        </div>
      </div>

      <div className='flex flex-col px-6 sm:px-10 lg:px-16 items-center mt-16 '>

        <div className='flex items-center w-full self-center sticky top-7 z-20 backdrop:bg-black gap-x-2 sm:gap-x-6 lg:gap-x-10 justify-center mb-16'>

          <div className="group relative">
            <button className="bg-white text-xs sm:text-sm text-gray-700 py-2 px-4 rounded-full flex items-center border shadow-sm">
              {category} <span className="ml-2">&#x25BE;</span>
            </button>
            <ul className="absolute mt-2 bg-white shadow-lg rounded-lg w-48 hidden group-hover:block">
              {categories.map((cat, index) => (
                <li
                  key={index}
                  className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                  onClick={() => setCategory(cat)}
                >
                  {cat}
                </li>
              ))}
            </ul>
          </div>

          {/* Product Dropdown */}
          <div className="group relative">
            <button className="bg-white text-gray-700 py-2 px-4 text-xs sm:text-sm rounded-full flex items-center border shadow-sm">
              {product} <span className="ml-2">&#x25BE;</span>
            </button>
            <ul className="absolute mt-2 bg-white shadow-lg rounded-lg w-48 hidden group-hover:block">
              {products.map((prod, index) => (
                <li
                  key={index}
                  className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                  onClick={() => setProduct(prod)}
                >
                  {prod}
                </li>
              ))}
            </ul>
          </div>

          {/* Search Bar */}
          <div className="flex items-center bg-white border shadow-sm rounded-full px-4 py-2">
            <input
              type="text"
              placeholder="search..."
              className="outline-none max-h-full text-xs sm:text-sm w-32 sm:w-44 lg:w-64"
            />
            <button className="text-gray-500 hover:text-gray-700 text-xs sm:text-sm">
              &#x1F50D;
            </button>
          </div>

        </div>

        {/* Featured Section */}
        <div>
          <h3 className="text-4xl font-bold mb-8">Our Featured Collections</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

            {allProduct.map((product) => <ProductLayoutOne key={product.id} product={product} />)}

          </div>
        </div>

      </div>

    </div>
  );
}
