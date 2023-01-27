import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.span`
  font-weight: ${({ fontWeight }) => fontWeight};
  font-size: ${({ titleSize }) => titleSize + "rem"};
  color: ${({ titleColor }) => titleColor};
  margin-bottom: 3px;
`;

const SubTitle = styled.span`
  font-size: ${({ subTitleSize }) => subTitleSize + "rem"};
  color: ${({ subTitleColor }) => subTitleColor};
`;

const Additional = styled.span`
  font-size: ${({ additionalSize }) => additionalSize + "rem"};
  font-weight: ${({ additionalFontWeight }) => additionalFontWeight};
  color: ${({ additionalColor }) => additionalColor};
`;

export { Container, Left, Title, SubTitle, Additional };
