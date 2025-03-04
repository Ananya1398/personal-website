import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export function Input({ type = "text", className = "", ...props }: InputProps) {
  return <input type={type} className={`border border-gray-600 p-2 w-full rounded-md text-black ${className}`} {...props} />;
}
