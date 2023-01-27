import { useState } from "react";
import { Container, Handle } from "./Switch.styled";

const Switch = ({
  onBillingChange,
  yearlyBilling,
  handleColor,
  trackColor,
}) => {
  const [checked, setChecked] = useState(yearlyBilling);

  const handleClick = () => {
    onBillingChange();
    setChecked(!checked);
  };

  return (
    <Container onClick={handleClick} checked={checked} trackColor={trackColor}>
      <Handle handleColor={handleColor} />
    </Container>
  );
};

export default Switch;
