import Step1 from "../Step1/Step1";
import Step2 from "../Step2/Step2";
import Step3 from "../Step3/Step3";
import Step4 from "../Step4/Step4";
import ThankYou from "../ThankYou.js/ThankYou";

const StepSwitcher = ({
  inputErrors,
  currentStep,
  formData,
  onAddOnSelect,
  onBillingChange,
  onChangePlan,
  onInputChange,
  onPlanSelect,
}) => {
  switch (currentStep) {
    case 1:
      return (
        <Step1
          formData={formData}
          onInputChange={onInputChange}
          inputErrors={inputErrors}
        />
      );
    case 2:
      return (
        <Step2
          onBillingChange={onBillingChange}
          onPlanSelect={onPlanSelect}
          yearlyBilling={formData.yearlyBilling}
          selectedPlan={formData.plan}
        />
      );
    case 3:
      return <Step3 onAddOnSelect={onAddOnSelect} formData={formData} />;
    case 4:
      return <Step4 formData={formData} onChangePlan={onChangePlan} />;

    default:
      return <ThankYou />;
  }
};

export default StepSwitcher;
