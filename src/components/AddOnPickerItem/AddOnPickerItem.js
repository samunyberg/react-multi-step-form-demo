import { useTheme } from "styled-components";
import { Container } from "./AddOnPickerItem.styled";
import PlanInfoItem from "../PlanInfoItem/PlanInfoItem";
import CheckBox from "../CheckBox.js/CheckBox";

const AddOnPickerItem = ({
  additional,
  additionalFontWeight,
  addOn,
  formData,
  onAddOnSelect,
  subTitle,
  title,
}) => {
  const theme = useTheme();

  const isSelected = () =>
    formData.addOns.some((item) => item._id === addOn._id);

  return (
    <Container onClick={() => onAddOnSelect(addOn)} selected={isSelected()}>
      <CheckBox
        checkedBackgroundColor={theme.colors.purplishBlue}
        checkedBorderColor="transparent"
        color={theme.colors.white}
        height="25"
        selected={isSelected()}
        uncheckedBackgroundColor={theme.colors.white}
        uncheckedBorderColor={theme.colors.lightGray}
      />
      <PlanInfoItem
        additional={additional}
        additionalColor={theme.colors.purplishBlue}
        additionalFontWeight={additionalFontWeight}
        fontWeight={600}
        subTitle={subTitle}
        subTitleColor={theme.colors.coolGray}
        subTitleSize={0.9}
        title={title}
        titleColor={theme.colors.marineBlue}
      />
    </Container>
  );
};

export default AddOnPickerItem;
