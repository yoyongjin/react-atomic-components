import { Ref, forwardRef } from "react";
import styled from "styled-components";
import { InputProps } from "../../types/styledProps";

const Input = styled.input<InputProps>`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;

  ${({ customStyles }) => customStyles && { ...customStyles }}
`;

function TextInputComponent(
  { customStyles, register, ...rest }: InputProps,
  ref: Ref<HTMLInputElement>
) {
  return (
    <Input customStyles={customStyles} {...register} {...rest} ref={ref} />
  );
}

// React.forwardRef를 사용하여 ref를 전달
const TextInput = forwardRef(TextInputComponent);

export default TextInput;
