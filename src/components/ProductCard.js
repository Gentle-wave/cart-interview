export default function ProductCard({ product }) {
    return (
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-56 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-bold">{product.title}</h3>
          <p className="mt-2 text-gray-600">${product.price}</p>
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
            Add to Cart
          </button>
        </div>
      </div>
    );
  }
  