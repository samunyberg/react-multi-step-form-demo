import FormHeading from "../FormHeading/FormHeading";
import Summary from "../Summary/Summary";
import { FormContent } from "../../commonStyles/FormContent";

const Step4 = ({ formData, onChangePlan }) => {
  return (
    <FormContent>
      <FormHeading
        main="Finishing up"
        secondary="Double-check everything looks OK before confirming."
      />
      <Summary formData={formData} onChangePlan={onChangePlan} />
    </FormContent>
  );
};

export default Step4;
