import React from "react";

const Footer = () => {
    return (
        <footer className="bg-blue-600 py-8 px-8 sm:px-10 lg:px-16">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Section 1: Shop Links */}
                <div>
                    <h3 className="text-white font-semibold mb-4">Shop</h3>
                    <ul className="text-white space-y-2">
                        <li>
                            <a href="/" className="hover:text-white">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="/categories" className="hover:text-white">
                                Categories
                            </a>
                        </li>
                        <li>
                            <a href="/products" className="hover:text-white">
                                Products
                            </a>
                        </li>
                        <li>
                            <a href="/contact" className="hover:text-white">
                                Contact Us
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Section 2: Social Media Links */}
                <div>
                    <h3 className="text-white font-semibold mb-4">Follow Us</h3>
                    <div className="flex space-x-4">
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noreferrer"
                            className="text-white hover:text-white"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                className="w-6 h-6"
                            >
                                <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.494v-9.294h-3.13v-3.622h3.13v-2.67c0-3.097 1.892-4.785 4.657-4.785 1.325 0 2.464.099 2.797.143v3.243h-1.918c-1.504 0-1.796.715-1.796 1.764v2.305h3.587l-.467 3.622h-3.12v9.294h6.116c.731 0 1.324-.593 1.324-1.324v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                            </svg>
                        </a>

                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noreferrer"
                            className="text-white hover:text-white"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                className="w-6 h-6"
                            >
                                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.723-.951.564-2.005.974-3.127 1.195-.897-.955-2.178-1.55-3.594-1.55-2.72 0-4.924 2.205-4.924 4.924 0 .386.044.763.128 1.124-4.092-.205-7.719-2.165-10.148-5.144-.425.729-.668 1.576-.668 2.476 0 1.708.869 3.217 2.188 4.102-.807-.026-1.566-.248-2.228-.616v.061c0 2.386 1.697 4.377 3.946 4.83-.413.111-.849.171-1.296.171-.317 0-.626-.031-.927-.088.627 1.956 2.444 3.379 4.599 3.42-1.685 1.32-3.808 2.107-6.114 2.107-.397 0-.788-.023-1.175-.069 2.179 1.397 4.768 2.211 7.548 2.211 9.057 0 14.009-7.507 14.009-14.009 0-.213-.005-.426-.014-.637.962-.695 1.797-1.56 2.457-2.548l-.047-.02z" />
                            </svg>
                        </a>

                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noreferrer"
                            className="text-white hover:text-white"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                className="w-6 h-6"
                            >
                                <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.343 3.608 1.318.975.975 1.256 2.242 1.318 3.608.058 1.265.069 1.645.069 4.849s-.012 3.584-.07 4.849c-.062 1.366-.343 2.633-1.318 3.608-.975.975-2.242 1.256-3.608 1.318-1.265.058-1.645.069-4.849.069s-3.584-.012-4.849-.07c-1.366-.062-2.633-.343-3.608-1.318-.975-.975-1.256-2.242-1.318-3.608-.058-1.265-.069-1.645-.069-4.849s.012-3.584.07-4.849c.062-1.366.343-2.633 1.318-3.608.975-.975 2.242-1.256 3.608-1.318 1.265-.058 1.645-.069 4.849-.069m0-2.163c-3.259 0-3.67.014-4.947.072-1.276.058-2.558.342-3.565 1.349-.998.998-1.282 2.29-1.34 3.565-.058 1.276-.072 1.688-.072 4.947s.014 3.671.072 4.947c.058 1.276.342 2.558 1.34 3.565.998.998 2.29 1.282 3.565 1.34 1.276.058 1.688.072 4.947.072s3.671-.014 4.947-.072c1.276-.058 2.558-.342 3.565-1.34.998-.998 1.282-2.29 1.34-3.565.058-1.276.072-1.688.072-4.947s-.014-3.671-.072-4.947c-.058-1.276-.342-2.558-1.34-3.565-.998-.998-2.29-1.282-3.565-1.34-1.276-.058-1.688-.072-4.947-.072z" />
                                <path d="M12 5.838a6.163 6.163 0 1 0 0 12.326 6.163 6.163 0 0 0 0-12.326zm0 10.163a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-10.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Section 3: Contact Info */}
                <div>
                    <h3 className="text-white font-semibold mb-4">Contact Us</h3>
                    <p className="text-white">Email: support@shop.com</p>
                    <p className="text-white">Phone: +1 234 567 890</p>
                    <p className="text-white mt-4">&copy; 2024 Shop Inc.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
