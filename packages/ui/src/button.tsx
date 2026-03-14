"use client";

import { ReactNode, ButtonHTMLAttributes } from "react";
import { motion } from "framer-motion";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'destructive';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Button = ({ 
  onClick, 
  children, 
  variant = 'primary',
  size = 'md',
  className = "",
  ...props
}: ButtonProps) => {
  const baseStyles = "font-semibold rounded-full focus:outline-none focus:ring-4 focus:ring-blue-300/50 transition-all duration-200 inline-flex items-center justify-center shadow-md hover:shadow-lg active:scale-95";

  const variants = {
    primary: "bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700",
    secondary: "bg-white text-gray-700 border-2 border-slate-200 hover:bg-slate-50",
    destructive: "bg-red-500 hover:bg-red-600 text-white"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  return (
    <motion.button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      type="button"
      {...props}
    >
      {children}
    </motion.button>
  );
};
