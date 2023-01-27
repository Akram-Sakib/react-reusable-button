import React from "react";

const Button = ({ children, className, ...props }) => (
  <button
    className={`px-4 py-2 font-bold text-white bg-blue-500 rounded-full ${className}`}
    {...props}
  >
    {children}
  </button>
);

export default Button;
