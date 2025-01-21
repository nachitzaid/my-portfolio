// src/components/ui/button.tsx

import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
}

export const Button: React.FC<ButtonProps> = ({ variant = "primary", children, ...props }) => {
  const variantStyles = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white",
    secondary: "bg-gray-600 hover:bg-gray-700 text-white",
    ghost: "bg-transparent hover:bg-gray-200 text-blue-600",
  };

  return (
    <button
      {...props}
      className={`px-6 py-3 rounded-lg transition-all ${variantStyles[variant]}`}
    >
      {children}
    </button>
  );
};
