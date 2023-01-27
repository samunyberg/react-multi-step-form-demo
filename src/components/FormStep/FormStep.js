import { Container, StepNumberIcon, Title, Details } from "./FormStep.styled";

const FormStep = ({ active, stepNumber, title, subtitle }) => {
  return (
    <Container>
      <StepNumberIcon active={active}>{stepNumber}</StepNumberIcon>
      <Details>
        <Title>{title.toUpperCase()}</Title>
        <span>{subtitle.toUpperCase()}</span>
      </Details>
    </Container>
  );
};

export default FormStep;
