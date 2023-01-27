import {
  Container,
  InputDetails,
  Label,
  TextField,
  Error,
} from "./FormInput.styled";

const FormInput = ({
  name,
  value,
  onInputChange,
  label,
  placeholder,
  type,
  error,
}) => {
  return (
    <Container>
      <InputDetails>
        <Label htmlFor={name}>{label}</Label>
        {error && <Error>{error}</Error>}
      </InputDetails>
      <TextField
        name={name}
        onChange={onInputChange}
        placeholder={placeholder}
        type={type}
        value={value}
      ></TextField>
    </Container>
  );
};

export default FormInput;
