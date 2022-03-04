import React from "react";
import "./button.css";

type IButtonProps = {
  onClick: () => void;
  disabled?: boolean;
};
const Button: React.FC<IButtonProps> = ({
  children,
  onClick,
  disabled = false,
}) => {
  return (
    <button
      className="button"
      data-testid="button"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export { Button };
