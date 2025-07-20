import { FiShoppingCart } from 'react-icons/fi';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { cart } = useCart();
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-3">
          <img src="/FakeStore.jpg" alt="FakeStore Logo" className="w-10 h-10" />
          <h1 className="text-xl font-bold text-gray-800">FakeStore</h1>
        </Link>

        <Link
          to="/cart"
          className="relative p-2 rounded-full hover:bg-gray-200 transition"
          aria-label="Open cart"
        >
          <FiShoppingCart className="text-2xl text-gray-700" />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {cartCount}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
