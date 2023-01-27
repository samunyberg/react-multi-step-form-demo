import {
  Container,
  Details,
  Title,
  Price,
  Additional,
} from "./PlanPickerItem.styled";
import Icon from "../Icon/Icon";

const PlanPickerItem = ({
  icon,
  title,
  price,
  selected,
  onSelect,
  yearlyBilling,
  offer,
}) => {
  const getBillingFrequency = () => {
    const base = "$" + price;
    return yearlyBilling ? base + "/yr" : base + "/mo";
  };

  return (
    <Container selected={selected} onClick={() => onSelect(title)}>
      <Icon icon={icon} />
      <Details>
        <Title>{title}</Title>
        <Price>{getBillingFrequency()}</Price>
        {yearlyBilling && <Additional>{offer}</Additional>}
      </Details>
    </Container>
  );
};

export default PlanPickerItem;
