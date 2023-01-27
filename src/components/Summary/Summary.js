import { useTheme } from "styled-components";
import {
  DetailsBox,
  Hr,
  ChangePlanLink,
  NoAddOnsSelected,
  TotalPrice,
} from "./Summary.styled";
import PlanInfoItem from "../PlanInfoItem/PlanInfoItem";

const Summary = ({ formData, onChangePlan }) => {
  const theme = useTheme();

  const getBillingFrequency = () => {
    return formData.yearlyBilling ? " (yearly)" : " (monthly)";
  };

  const getPlanPrice = () => {
    const yearlyPrice = formData.plan.yearlyPrice;
    const monthlyPrice = formData.plan.monthlyPrice;
    return formData.yearlyBilling ? yearlyPrice : monthlyPrice;
  };

  const getAddOnPrice = (addOn) => {
    const yearlyPrice = addOn.yearlyPrice;
    const monthlyPrice = addOn.monthlyPrice;
    return formData.yearlyBilling ? yearlyPrice : monthlyPrice;
  };

  const getTotalPrice = () => {
    const planPrice = getPlanPrice();

    if (formData.addOns.length === 0) return planPrice;

    const addOnsPrice = formData.addOns.reduce(
      (sum, item) => sum + getAddOnPrice(item),
      0
    );

    return planPrice + addOnsPrice;
  };

  return (
    <>
      <DetailsBox>
        <PlanInfoItem
          additional={
            "$" + getPlanPrice() + (formData.yearlyBilling ? "/yr" : "/mo")
          }
          additionalColor={theme.colors.marineBlue}
          additionalFontWeight={600}
          additionalSize={1.2}
          fontWeight={600}
          subTitle={
            <ChangePlanLink onClick={onChangePlan}>Change</ChangePlanLink>
          }
          title={formData.plan.name + getBillingFrequency()}
          titleColor={theme.colors.marineBlue}
          titleSize={1.2}
        />
        <Hr />
        {formData.addOns.length === 0 ? (
          <NoAddOnsSelected>No add-ons selected</NoAddOnsSelected>
        ) : (
          formData.addOns.map((addOn) => (
            <PlanInfoItem
              additional={
                "+$" +
                getAddOnPrice(addOn) +
                (formData.yearlyBilling ? "/yr" : "/mo")
              }
              additionalColor={theme.colors.marineBlue}
              additionalFontWeight={500}
              additionalSize={1}
              fontWeight={400}
              key={addOn._id}
              title={addOn.name}
              titleColor={theme.colors.coolGray}
              titleSize={1}
            />
          ))
        )}
      </DetailsBox>
      <TotalPrice>
        <PlanInfoItem
          additional={
            "$" + getTotalPrice() + (formData.yearlyBilling ? "/yr" : "/mo")
          }
          additionalColor={theme.colors.purplishBlue}
          additionalFontWeight={600}
          additionalSize={1.3}
          fontWeight={600}
          title="Total (per month)"
          titleColor={theme.colors.coolGray}
          titleSize={1.1}
        />
      </TotalPrice>
    </>
  );
};

export default Summary;
