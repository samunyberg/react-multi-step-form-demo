import { useState } from "react";

import { Container, Left, Right, RightContainer } from "./MultiStepForm.styled";
import FormStepIndicator from "../FormStepIndicator/FormStepIndicator";
import FormButtons from "../FormButtons/FormButtons";
import StepSwitcher from "../StepSwitcher/StepSwitcher";

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    plan: { name: "Arcade", monthlyPrice: 9, yearlyPrice: 90 },
    yearlyBilling: false,
    addOns: [],
  });
  const [inputErrors, setInputErrors] = useState({});

  const validateInputs = () => {
    const errors = {};
    const validEmail =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const validPhone =
      /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im;

    if (formData.name.trim() === "") errors.name = "Name is a required field";
    else if (
      formData.name.trim().length < 2 ||
      formData.name.trim().length > 25
    )
      errors.name = "Name must be have 2 - 25 characters";

    if (!formData.email.match(validEmail))
      errors.email = "Email must be a valid email";

    if (!formData.phone.match(validPhone))
      errors.email = "Phone number must be a valid phone number";

    return Object.keys(errors).length === 0 ? null : errors;
  };

  const handleInputChange = ({ currentTarget: input }) => {
    const data = { ...formData };
    data[input.name] = input.value;

    setFormData(data);
  };

  const handleSubmit = () => {
    if (currentStep === 1) {
      const errors = validateInputs();
      setInputErrors(errors || {});
      if (errors) return;
    }
    setCurrentStep(currentStep + 1);
  };

  const handleGoBack = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleChangePlan = () => {
    setCurrentStep(2);
  };

  const handleBillingChange = () => {
    const data = { ...formData };
    data.yearlyBilling = !formData.yearlyBilling;
    setFormData(data);
  };

  const handlePlanSelect = (plan) => {
    const data = { ...formData };
    data.plan = plan;
    setFormData(data);
  };

  const handleAddOnSelect = (addOn) => {
    const data = { ...formData };
    const existingAddOn = data.addOns.find((item) => item._id === addOn._id);

    if (existingAddOn) {
      const newAddOns = data.addOns.filter((item) => item._id !== addOn._id);
      data.addOns = newAddOns;
      return setFormData(data);
    }
    data.addOns = [...formData.addOns, addOn];
    setFormData(data);
  };

  return (
    <Container>
      <Left>
        <FormStepIndicator currentStep={currentStep} />
      </Left>
      <Right>
        <RightContainer>
          <StepSwitcher
            inputErrors={inputErrors}
            currentStep={currentStep}
            formData={formData}
            onAddOnSelect={handleAddOnSelect}
            onBillingChange={handleBillingChange}
            onInputChange={handleInputChange}
            onPlanSelect={handlePlanSelect}
            onChangePlan={handleChangePlan}
          />
          {currentStep < 5 && (
            <FormButtons
              disabled={validateInputs()}
              currentStep={currentStep}
              onGoBack={handleGoBack}
              onSubmit={handleSubmit}
            />
          )}
        </RightContainer>
      </Right>
    </Container>
  );
};

export default MultiStepForm;
