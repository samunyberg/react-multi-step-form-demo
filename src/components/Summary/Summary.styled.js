import styled from "styled-components";

const DetailsBox = styled.div`
  width: 100%;
  max-height: 50%;
  background-color: ${({ theme }) => theme.colors.magnolia};
  border-radius: 15px;
  padding: 25px 30px;
  box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
`;

const Hr = styled.hr`
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  margin: 18px 0;
`;

const ChangePlanLink = styled.span`
  color: ${({ theme }) => theme.colors.coolGray};
  cursor: pointer;
  font-weight: 400;

  &:hover {
    text-decoration: underline;
  }
`;

const NoAddOnsSelected = styled.span`
  font-weight: 400;
  color: ${({ theme }) => theme.colors.marineBlue};
`;

const TotalPrice = styled.div`
  width: 100%;
  padding: 25px 30px;
`;

export { DetailsBox, Hr, ChangePlanLink, NoAddOnsSelected, TotalPrice };
