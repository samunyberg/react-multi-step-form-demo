import { ButtonStyled } from "./Button.styled";

const Button = ({ onClick, backgroundColor, textColor, text, disabled }) => {
  return (
    <ButtonStyled
      disabled={disabled}
      onClick={onClick}
      textColor={textColor}
      backgroundColor={backgroundColor}
    >
      {text}
    </ButtonStyled>
  );
};

export default Button;
