import { useState } from "react";

import { Container, PlansList } from "./PlanPicker.styled";
import { plans } from "../../data";
import PlanPickerItem from "../PlanPickerItem/PlanPickerItem";

const PlanPicker = ({ yearlyBilling, onPlanSelect, selectedPlan }) => {
  const [selected, setSelected] = useState(selectedPlan);

  const handleSelect = (plan) => {
    setSelected(plan);
    onPlanSelect(plan);
  };

  return (
    <Container>
      <PlansList>
        {plans.map((plan) => (
          <PlanPickerItem
            icon={plan.icon}
            key={plan._id}
            offer={plan.offer}
            onSelect={() => handleSelect(plan)}
            price={yearlyBilling ? plan.yearlyPrice : plan.monthlyPrice}
            selected={selected.name === plan.name}
            title={plan.name}
            yearlyBilling={yearlyBilling}
          />
        ))}
      </PlansList>
    </Container>
  );
};

export default PlanPicker;
