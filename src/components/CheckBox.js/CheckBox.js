import { FaCheck } from "react-icons/fa";
import { Container } from "./CheckBox.styled";

const CheckBox = ({
  height = "30",
  selected,
  color,
  checkedBackgroundColor,
  uncheckedBackgroundColor,
  checkedBorderColor,
  uncheckedBorderColor,
}) => {
  return (
    <Container
      checked={selected}
      checkedBackgroundColor={checkedBackgroundColor}
      checkedBorderColor={checkedBorderColor}
      color={color}
      height={height}
      uncheckedBackgroundColor={uncheckedBackgroundColor}
      uncheckedBorderColor={uncheckedBorderColor}
    >
      {selected && <FaCheck size={height - 10} />}
    </Container>
  );
};

export default CheckBox;
