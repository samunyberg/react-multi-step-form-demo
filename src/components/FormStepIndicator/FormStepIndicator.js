import { Container } from "./FormStepIndicator.styled";
import FormStep from "../FormStep/FormStep";

const FormStepIndicator = ({ currentStep }) => {
  return (
    <Container>
      <FormStep
        active={currentStep === 1}
        stepNumber={1}
        title="Step 1"
        subtitle="Your info"
      />
      <FormStep
        active={currentStep === 2}
        stepNumber={2}
        title="Step 2"
        subtitle="Select plan"
      />
      <FormStep
        active={currentStep === 3}
        stepNumber={3}
        title="Step 3"
        subtitle="Add-ons"
      />
      <FormStep
        active={currentStep === 4}
        stepNumber={4}
        title="Step 4"
        subtitle="Summary"
      />
    </Container>
  );
};

export default FormStepIndicator;
