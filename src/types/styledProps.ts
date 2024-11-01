import React, {
  ButtonHTMLAttributes,
  InputHTMLAttributes,
  SelectHTMLAttributes,
} from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface StyledProps {
  customStyles?: React.CSSProperties;
}
export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    StyledProps {}

export interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    StyledProps {
  register?: UseFormRegisterReturn;
}

export interface SelectProps
  extends SelectHTMLAttributes<HTMLSelectElement>,
    StyledProps {
  register?: UseFormRegisterReturn;
}
