import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export function Button({ children, className = "", ...props }: ButtonProps) {
  return (
    <button className={`bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md w-full ${className}`} {...props}>
      {children}
    </button>
  );
}
