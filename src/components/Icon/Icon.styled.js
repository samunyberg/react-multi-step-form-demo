import styled from "styled-components";

export const IconStyled = styled.div`
  align-items: center;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 50%;
  display: flex;
  height: 50px;
  justify-content: center;
  width: 50px;
`;
