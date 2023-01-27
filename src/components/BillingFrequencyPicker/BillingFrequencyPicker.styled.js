import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.magnolia};
  margin-top: 30px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const Option = styled.span`
  font-weight: 500;
  color: ${({ yearlyBilling, theme }) =>
    !yearlyBilling ? theme.colors.marineBlue : theme.colors.coolGray};
  font-weight: ${({ yearlyBilling }) => (!yearlyBilling ? 600 : 400)};
`;

export { Container, Option };
