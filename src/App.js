import Theme from "./commonStyles/Theme";
import { Container } from "./App.styled";
import MultiStepForm from "./components/MultiStepForm/MultiStepForm";

const App = () => {
  return (
    <Theme>
      <Container>
        <MultiStepForm />
      </Container>
    </Theme>
  );
};

export default App;
