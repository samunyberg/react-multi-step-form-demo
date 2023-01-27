import FormHeading from "../FormHeading/FormHeading";
import FormInput from "../FormInput/FormInput";
import { FormContent } from "../../commonStyles/FormContent";

const Step1 = ({ formData, onInputChange, inputErrors }) => {
  return (
    <FormContent>
      <FormHeading
        main="Personal info"
        secondary="Please provide your name, email address and phone number."
      />
      <FormInput
        formData={formData}
        onInputChange={onInputChange}
        label="Name"
        name="name"
        placeholder="e.g. Stephen King"
        type="text"
        value={formData.name}
        error={inputErrors.name}
      />
      <FormInput
        formData={formData}
        onInputChange={onInputChange}
        label="Email Address"
        name="email"
        placeholder="e.g. stephen.king@lorem.com"
        type="email"
        value={formData.email}
      />
      <FormInput
        formData={formData}
        onInputChange={onInputChange}
        label="Phone Number"
        name="phone"
        placeholder="e.g. +1 234 567 890"
        type="text"
        value={formData.phone}
      />
    </FormContent>
  );
};

export default Step1;
