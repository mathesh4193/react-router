import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart, changeQuantity } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discounted = total * 0.9;

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Your Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border-b py-3"
            >
              <div>
                <h2 className="font-semibold">{item.title}</h2>
                <p className="text-sm text-gray-600">
                  ${item.price.toFixed(2)} × {item.quantity} = $
                  {(item.price * item.quantity).toFixed(2)}
                </p>
                <div className="mt-1">
                  <button
                    onClick={() => changeQuantity(item.id, -1)}
                    className="px-2 py-1 bg-gray-300 rounded-l"
                  >
                    -
                  </button>
                  <span className="px-3">{item.quantity}</span>
                  <button
                    onClick={() => changeQuantity(item.id, 1)}
                    className="px-2 py-1 bg-gray-300 rounded-r"
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Remove
              </button>
            </div>
          ))}

          <div className="text-right mt-6">
            <p className="text-lg">Subtotal: ${total.toFixed(2)}</p>
            <p className="text-green-700">Discount (10%): -${(total * 0.1).toFixed(2)}</p>
            <p className="font-bold text-xl">Total: ${discounted.toFixed(2)}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
