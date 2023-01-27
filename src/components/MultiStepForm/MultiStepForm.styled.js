import styled from "styled-components";

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 15px;
  box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
  display: flex;
  height: 80%;
  width: 80%;
  max-height: 670px;
  max-width: 1140px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    border-radius: 0;
    flex-direction: column;
    height: 30%;
    width: 100%;
  }
`;

const Left = styled.div`
  background-image: url("../..//assets/images/bg-sidebar-desktop.svg");
  background-size: cover;
  border-radius: 15px;
  flex: 1;
  margin: 15px;
  padding: 20px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    background-image: url("../..//assets/images/bg-sidebar-mobile.svg");
    border-radius: 0;
    flex: none;
    height: 100%;
    margin: 0;
  }
`;

const Right = styled.div`
  display: flex;
  flex: 3;
  justify-content: center;
  margin: 15px;
  padding: 20px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 15px;
    height: 75%;
    margin: 30px;
    padding: 0 0 30px 0;
    position: absolute;
    top: 120px;
    width: 90vw;
  }
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  width: 80%;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 90%;
  }
`;

export { Container, Left, Right, RightContainer };
