import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-4xl font-bold text-red-600 mb-4">
        Payment Unavailable
      </h1>

      <p className="text-gray-600 mb-6">
        Sorry, online payment is currently unavailable.
      </p>

      <Link
        to="/"
        className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600"
      >
        Back to Home
      </Link>
    </div>
  );
}