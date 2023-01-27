import { useTheme } from "styled-components";
import Button from "../Button/Button";
import { Container, Icon, Heading, Text } from "./ThankYou.styled";

const ThankYou = () => {
  const theme = useTheme();

  return (
    <Container>
      <Icon />
      <Heading>Thank You!</Heading>
      <Text>
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com
      </Text>
      <Button
        onClick={() =>
          alert("Thank you for checking out this multi-step form!")
        }
        backgroundColor={theme.colors.purplishBlue}
        text="Back to main page"
        textColor={theme.colors.white}
      />
    </Container>
  );
};

export default ThankYou;
