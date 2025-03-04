import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { HiMenu, HiX } from 'react-icons/hi'; // Importing icons for hamburger and close
import { useState } from 'react';

export default function NavBar() {
  const { cart } = useCart();
  const [isOpen, setIsOpen] = useState(false); // State to manage menu visibility

  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-xl font-bold">ShopMagic</h1>
        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
        {/* Navigation Links */}
        <ul className={`flex-col md:flex md:flex-row md:space-x-4 absolute z-50 md:static bg-blue-600 w-full md:w-auto left-0 transition-transform duration-300 ease-in-out ${isOpen ? 'top-16' : 'top-[-200px]'}`}>
          <li>
            <Link to="/" className="text-white block p-2 md:p-0">Home</Link>
          </li>
          <li>
            <Link to="/products" className="text-white block p-2 md:p-0">Products</Link>
          </li>
          <li>
            <Link to="/cart" className="text-white block p-2 md:p-0">
              Cart ({cart.length})
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
