import FormHeading from "../FormHeading/FormHeading";
import AddOnPicker from "../AddOnPicker/AddOnPicker";
import { FormContent } from "../../commonStyles/FormContent";

const Step3 = ({ onAddOnSelect, formData }) => {
  return (
    <FormContent>
      <FormHeading
        main="Pick add-ons"
        secondary="Add-ons help you enhance your gaming experience."
      />
      <AddOnPicker onAddOnSelect={onAddOnSelect} formData={formData} />
    </FormContent>
  );
};

export default Step3;
