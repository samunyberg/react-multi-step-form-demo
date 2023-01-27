import FormHeading from "../FormHeading/FormHeading";
import PlanPicker from "../PlanPicker/PlanPicker";
import BillingFrequencyPicker from "../BillingFrequencyPicker/BillingFrequencyPicker";
import { FormContent } from "../../commonStyles/FormContent";

const Step2 = ({
  onBillingChange,
  onPlanSelect,
  yearlyBilling,
  selectedPlan,
}) => {
  return (
    <FormContent>
      <FormHeading
        main="Select your plan"
        secondary="You have the option of monthly or yearly billing."
      />
      <PlanPicker
        yearlyBilling={yearlyBilling}
        onPlanSelect={onPlanSelect}
        selectedPlan={selectedPlan}
      />
      <BillingFrequencyPicker
        onBillingChange={onBillingChange}
        yearlyBilling={yearlyBilling}
      />
    </FormContent>
  );
};

export default Step2;
