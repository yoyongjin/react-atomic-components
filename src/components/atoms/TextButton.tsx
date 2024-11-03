import { ButtonProps } from "@commonTypes/styledProps";
import styled from "styled-components";

const Button = styled.button<ButtonProps>`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: #0070f3;
  color: white;
  font-size: 16px;
  cursor: pointer;

  ${({ customStyles }) => customStyles && { ...customStyles }}

  &:hover {
    background-color: #005bb5;
  }
`;

function TextButton({ customStyles, ...props }: ButtonProps) {
  return <Button customStyles={customStyles} {...props} />;
}

export default TextButton;
