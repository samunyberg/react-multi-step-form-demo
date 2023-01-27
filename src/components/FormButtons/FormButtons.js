import { Container } from "./FormButtons.styled";
import { useTheme } from "styled-components";
import Button from "../Button/Button";

const FormButtons = ({ currentStep, onSubmit, onGoBack, disabled }) => {
  const theme = useTheme();

  return (
    <Container currentStep={currentStep}>
      {currentStep > 1 && (
        <Button
          onClick={onGoBack}
          textColor={theme.colors.marineBlue}
          backgroundColor="transparent"
          text="Go Back"
        />
      )}
      <Button
        disabled={disabled}
        onClick={onSubmit}
        textColor={theme.colors.white}
        backgroundColor={
          currentStep === 4
            ? theme.colors.purplishBlue
            : theme.colors.marineBlue
        }
        text={currentStep === 4 ? "Confirm" : "Next Step"}
      />
    </Container>
  );
};

export default FormButtons;
