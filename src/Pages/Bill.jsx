// src/pages/Bill.jsx

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Bill = () => {
  const { cart } = useSelector((state) => state);
  const totalAmount = cart.reduce((acc, curr) => acc + curr.price, 0);
  const navigate = useNavigate();

  const handlePayment = () => {
    // Handle the payment logic here, such as redirecting to a payment gateway
    alert("Payment is being processed...");
    navigate("/"); // Navigate back to the homepage or store page
  };

  return (
    <div className="w-full max-w-[1000px] mx-auto pt-4">
      <div className="mt-16">
        <h1 className="text-4xl font-bold">Bill Summary</h1>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold">Products:</h2>
          <ul>
            {cart.map((item, index) => (
              <li key={index} className="flex justify-between py-2">
                <span>{item.title}</span>
                <span>${item.price.toFixed(2)}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <h2 className="text-2xl font-semibold">Total Amount:</h2>
            <p className="text-lg font-bold">${totalAmount.toFixed(2)}</p>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-semibold">Payment Options:</h2>
            <div className="space-y-4">
              <button
                className="w-full bg-green-700 text-white py-2 rounded-md"
                onClick={handlePayment}
              >
                Pay with Card
              </button>
              <button
                className="w-full bg-gray-700 text-white py-2 rounded-md"
                onClick={handlePayment}
              >
                Pay with PayPal
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bill;
