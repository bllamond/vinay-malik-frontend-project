import React from 'react';

const Button = ({ children, className, onClick }) => (
  <button
    className={`flex gap-3 justify-center items-center px-6 py-4 text-base font-medium leading-none text-white bg-indigo-600 rounded-[360px] ${className}`}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;

