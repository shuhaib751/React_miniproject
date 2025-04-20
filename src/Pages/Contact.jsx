import React from 'react';

const Contact = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-4xl font-bold">Contact Us</h1>
      <p className="text-lg">
        Got questions, suggestions, or just want to say hi? We’d love to hear from you! 
        Feel free to reach out through any of the following ways:
      </p>

      <div className="space-y-2 text-lg">
        <p><strong>Phone:</strong> +1 98364477</p>
        <p><strong>Email:</strong> innerpeaceofficial@gmail.com</p>
        <p><strong>Instagram:</strong> <a href="https://instagram.com/INNER_PEACE" className="text-blue-500">@INNER_PEACE</a></p>
        <p><strong>Facebook:</strong> <a href="https://facebook.com/INNER_PEACE" className="text-blue-500">INNER_PEACE</a></p>
        <p><strong>Address:</strong> Bangalore-64, Karnataka, India</p>
      </div>

      <p className="text-lg mt-4">
        We're always here to support your journey to wellness. Drop a message, and we’ll get back to you as soon as possible!
      </p>
    </div>
  );
};

export default Contact;
