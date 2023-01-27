import styled from "styled-components";

export const ButtonStyled = styled.button`
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: 5px;
  border: none;
  color: ${({ textColor }) => textColor};
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  font-size: 16px;
  font-weight: 600;
  padding: 10px 20px;
  opacity: ${({ disabled }) => disabled && 0.9};
  transition: all 0.3s;

  &:hover {
    opacity: ${({ disabled }) => !disabled && 0.9};
    scale: ${({ disabled }) => !disabled && 0.98};
  }
`;
