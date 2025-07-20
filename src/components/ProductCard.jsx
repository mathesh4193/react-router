import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { cart, addToCart } = useCart();
  const isInCart = cart.some((item) => item.id === product.id);

  return (
    <div className="border p-4 rounded shadow hover:shadow-lg transition">
      <img src={product.image} alt={product.title} className="h-40 object-contain mx-auto mb-2" />
      <h2 className="font-bold text-lg truncate">{product.title}</h2>
      <p className="text-gray-700">${product.price.toFixed(2)}</p>
      <p className="text-sm text-gray-500 mt-1">{product.description.slice(0, 80)}...</p>
      <button
        className={`mt-2 w-full py-1 rounded ${
          isInCart ? "bg-red-500" : "bg-green-600"
        } text-white hover:opacity-90`}
        onClick={() => addToCart(product)}
      >
        {isInCart ? "Remove from Cart" : "Add to Cart"}
      </button>
    </div>
  );
};

export default ProductCard;
