import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Button } from "./Button";

const STYLE_SIZE_LARGE = "large";

const CardWrapper = styled.div`
  position: relative;
  ${({ size, bg }) =>
    size === STYLE_SIZE_LARGE &&
    `
    background-image: url(${bg});
    width: 540px;
    height: 360px;
    background-size: cover;
  `}
  ${({ size }) =>
    size !== STYLE_SIZE_LARGE &&
    `
      display: flex;
    `}
`;
const ShadowScreen = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
  position: absolute;
  height: 100%;
  width: 100%;
`;

const Title = styled.h2`
  margin-bottom: 10px;
  ${({ size }) =>
    size === STYLE_SIZE_LARGE &&
    `
      color: white;
      font-size: 24px;
      line-height: 32px;
      font-weight: bold;
    `}
  ${({ size }) =>
    size !== STYLE_SIZE_LARGE &&
    `
      color: #1674C0;
      font-size: 21px;
      line-height: 28px;
      font-weight: bold;
    `}
`;
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${({ size }) =>
    size === STYLE_SIZE_LARGE
      ? `
    padding: 30px;
    justify-content: flex-end;
    position: absolute;
    bottom: 0;
    z-index: 10;
    color: white;
  `
      : `
    margin-left: 25px;
  `}
`;
const Text = styled.p`
  margin: 0 0 5px;
  ${({ size }) =>
    size === STYLE_SIZE_LARGE
      ? `
    font-size: 18px;
  line-height: 28px;
  `
      : `
  font-size: 16px;
  line-height: 24px;
  `}
`;

const ButtonContainer = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
`;

const ImageContainer = styled.img`
  width: 264px;
  height: 176px;
`;
const CategoryColor = styled.div`
  height: 15px;
  width: 15px;
  background-color: #009e5d;
  display: inline-block;
  margin-right: 10px;
`;
const EventCard = ({ size, card }) => {
  const innerCard = (
    <>
      <ImageContainer src={card.image} />
      <ContentWrapper size={size}>
        <Title size={size}>{card.title}</Title>
        <Text size={size}>
          <strong>Date/Time:</strong> {card.date}
        </Text>
        <Text size={size}>
          <strong>Location:</strong> {card.location}
        </Text>
        <Text size={size}>{card.description}</Text>
        <Text size={size}>
          <CategoryColor />
          {card.category}
        </Text>
      </ContentWrapper>
    </>
  );
  const innerCardLarge = (
    <>
      <ShadowScreen />
      <ContentWrapper size={size}>
        <Title size={size}>{card.title}</Title>
        <Text>{card.date}</Text>
        <Text>{card.description}</Text>
      </ContentWrapper>
      <ButtonContainer>
        <Button appearance="primary">More Details</Button>
      </ButtonContainer>
    </>
  );
  return (
    <CardWrapper size={size} bg={card.image}>
      {size === STYLE_SIZE_LARGE ? innerCardLarge : innerCard}
    </CardWrapper>
  );
};

EventCard.propTypes = {
  size: PropTypes.string,
  card: (PropTypes.shape = {
    image: PropTypes.string,
    title: PropTypes.string,
    date: PropTypes.string,
    location: PropTypes.string,
    category: PropTypes.string,
    description: PropTypes.string,
  }),
};

EventCard.defaultProps = {
  size: "normal",
};

export default EventCard;
