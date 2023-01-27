import { Container } from "./AddOnPicker.styled";

import { addOns } from "../../data";
import AddOnPickerItem from "../AddOnPickerItem/AddOnPickerItem";

const AddOnPicker = ({ onAddOnSelect, formData }) => {
  const getPrice = (addOn) => {
    return formData.yearlyBilling
      ? "+$" + addOn.yearlyPrice + "/yr"
      : "+$" + addOn.monthlyPrice + "/mo";
  };

  return (
    <Container>
      {addOns.map((addOn) => (
        <AddOnPickerItem
          additional={getPrice(addOn)}
          additionalFontWeight={600}
          addOn={addOn}
          formData={formData}
          onAddOnSelect={onAddOnSelect}
          key={addOn._id}
          subTitle={addOn.description}
          title={addOn.name}
        />
      ))}
    </Container>
  );
};

export default AddOnPicker;
