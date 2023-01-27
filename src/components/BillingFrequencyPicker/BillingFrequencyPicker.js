import { Container, Option } from "./BillingFrequencyPicker.styled";
import { useTheme } from "styled-components";
import Switch from "../Switch/Switch";

const BillingFrequencyPicker = ({ onBillingChange, yearlyBilling }) => {
  const theme = useTheme();

  return (
    <Container>
      <Option yearlyBilling={yearlyBilling}>Monthly</Option>
      <Switch
        onBillingChange={onBillingChange}
        handleColor={theme.colors.white}
        trackColor={theme.colors.purplishBlue}
        yearlyBilling={yearlyBilling}
      />
      <Option yearlyBilling={!yearlyBilling}>Yearly</Option>
    </Container>
  );
};

export default BillingFrequencyPicker;
