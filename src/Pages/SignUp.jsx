import React from 'react';

const SignUp = () => {
  return (
    <div className="p-6 max-w-md mx-auto space-y-6">
      <h1 className="text-3xl font-bold">Sign Up</h1>

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
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignUp;
