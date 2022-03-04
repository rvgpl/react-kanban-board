import React from "react";
import "./text-field.css";

type ITextFieldProps = {
  value: string;
  onChange: (value: string) => void;
};

const TextField = ({ value, onChange }: ITextFieldProps) => {
  return (
    <input
      className="text-field"
      data-testid="text-field"
      value={value}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        onChange(e.target.value)
      }
    />
  );
};

export { TextField };
