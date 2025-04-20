import React from 'react';

const Login = () => {
  return (
    <div className="p-6 max-w-md mx-auto space-y-6">
      <h1 className="text-3xl font-bold">Login</h1>

      <form className="space-y-4">
        <div>
          <label className="block text-lg font-medium">Enter Username:</label>
          <input
            type="text"
            className="w-full border rounded px-3 py-2 mt-1"
            placeholder="Username"
          />
        </div>

        <div>
          <label className="block text-lg font-medium">Enter Password:</label>
          <input
            type="password"
            className="w-full border rounded px-3 py-2 mt-1"
            placeholder="Password"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>

      <div className="text-sm text-right mt-2 text-blue-500 cursor-pointer hover:underline">
        Forgot Password?
      </div>

      <div className="mt-4">
        <p className="text-center text-sm">New here?</p>
        <button
          onClick={() => window.location.href = '/signup'}
          className="w-full mt-2 bg-gray-800 text-white py-2 rounded hover:bg-gray-900"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Login;
