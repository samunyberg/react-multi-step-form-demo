import styled from "styled-components";

const Container = styled.div`
  align-items: center;
  background-color: ${({
    checked,
    checkedBackgroundColor,
    uncheckedBackgroundColor,
  }) => (checked ? checkedBackgroundColor : uncheckedBackgroundColor)};
  border: 2px solid;
  border-color: ${({ checked, checkedBorderColor, uncheckedBorderColor }) =>
    checked ? checkedBorderColor : uncheckedBorderColor};
  border-radius: 8px;
  display: flex;
  min-height: ${({ height }) => height + "px"};
  max-height: ${({ height }) => height + "px"};
  max-width: ${({ height }) => height + "px"};
  min-width: ${({ height }) => height + "px"};
  justify-content: center;
  transition: all 0.3s;
  cursor: pointer;
  color: ${({ color }) => color};
`;

export { Container };
