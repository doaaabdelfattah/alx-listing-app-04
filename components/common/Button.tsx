// components/Button.tsx
import React from "react";
import { ButtonProps } from "../../interfaces";

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  type = "button",
  className,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`btn ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
