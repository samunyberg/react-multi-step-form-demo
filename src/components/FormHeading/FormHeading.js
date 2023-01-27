import { Container, MainHeading, SecondaryHeading } from "./FormHeading.styled";

const FormHeading = ({ main, secondary }) => {
  return (
    <Container>
      <MainHeading>{main}</MainHeading>
      <SecondaryHeading>{secondary}</SecondaryHeading>
    </Container>
  );
};

export default FormHeading;
