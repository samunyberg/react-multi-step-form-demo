import {
  Container,
  Left,
  Title,
  SubTitle,
  Additional,
} from "./PlanInfoItem.styled";

const PlanInfoItem = ({
  additional,
  additionalColor,
  additionalFontWeight,
  additionalSize,
  fontWeight,
  subTitle,
  subTitleColor,
  subTitleSize,
  title,
  titleColor,
  titleSize,
}) => {
  return (
    <Container>
      <Left>
        <Title
          titleColor={titleColor}
          titleSize={titleSize}
          fontWeight={fontWeight}
        >
          {title}
        </Title>
        {subTitle && (
          <SubTitle subTitleColor={subTitleColor} subTitleSize={subTitleSize}>
            {subTitle}
          </SubTitle>
        )}
      </Left>
      <Additional
        additionalFontWeight={additionalFontWeight}
        additionalSize={additionalSize}
        additionalColor={additionalColor}
      >
        {additional}
      </Additional>
    </Container>
  );
};

export default PlanInfoItem;
