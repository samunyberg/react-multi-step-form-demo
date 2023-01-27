import styled from "styled-components";

const Container = styled.div`
  align-items: center;
  background-color: ${({ selected, theme }) =>
    selected ? theme.colors.magnolia : theme.colors.white};
  border: 1px solid
    ${({ selected, theme }) =>
      selected ? theme.colors.purplishBlue : theme.colors.lightGray};
  border-radius: 15px;
  cursor: pointer;
  display: flex;
  gap: 30px;
  justify-content: center;
  padding: 15px 20px;
  transition: all 0.3s;

  &:hover {
    border-color: ${({ theme }) => theme.colors.purplishBlue};
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: 15px;
  }
`;

export { Container };
