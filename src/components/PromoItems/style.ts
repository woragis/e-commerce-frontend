import styled, { keyframes } from "styled-components";
import { darken, lighten, shade } from "polished";

export const PromoContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  /* background-image: linear-gradient(
    ${props => props.theme.background.color.neutral},
    ${props => lighten(0.3, props.theme.background.color.neutral)},
    ${props => darken(0.5, props.theme.background.color.main)},
    ${props => props.theme.background.color.main},
    ${props => lighten(0.3, props.theme.background.color.neutral)},
    ${props => props.theme.background.color.neutral}
  ); */
  /* background-image: radial-gradient(red, blue); */
  place-items: center;
  align-items: center;
  grid-gap: 20px;
  /* border: 1px solid red; */
  width: 100%;
  height: 150px;
  padding: 15px;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: -50%;
    left: 0;
    transform: translate(-50%, 0);
    transform: scale(200%, 180%);
    width: 100%;
    height: 100%;
    /* z-index: 1; */
    background-image: radial-gradient(
      ${props => props.theme.background.color.main},
      ${props => props.theme.background.color.neutral},
      ${props => props.theme.background.color.neutral}
    );
    backdrop-filter: blur(10px);
  }
`;

const rotationAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const StyledPromoItem = styled.article`
  .promo-item {
    height: 100px;
    width: 300px;
    font-size: 1.3em;
    /* text-shadow: 3px 3px 3px ${props => props.theme.background.color.secondary}; */
    margin: 0 auto;
    border: 3px solid turquoise;
    color: ${props => props.theme.text.color};
    background-image: url("ww.wwu.");
    background-repeat: no-repeat;
    background-size: cover;
    z-index: 5;
  }
  .rgb-container {
    width: 310px;
    height: 110px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    background-color: ${props => props.theme.background.color.neutral};
    overflow: hidden;
    box-shadow: 0 0 15px ${props => lighten(0, props.theme.background.color.secondary)};
    transition: 300ms;

    &::before,
    &::after {
      content: "";
      position: absolute;
      z-index: 0;
    }
    &::before {
      top: -50%;
      left: -50%;
      width: 600px;
      height: 600px;
      background: linear-gradient(to right, violet, indigo, blue, green, yellow, orange, red, pink);
      animation: rotationAnimation 2s linear infinite;
      animation-name: ${rotationAnimation};
      animation-duration: 15s;
      animation-timing-function: linear;
      animation-delay: 0ms;
      animation-iteration-count: infinite;
      animation-direction: normal;
    }
    &:hover {
      transform: scale(110%);
      &::before {
        animation-duration: 1.5s;
        animation-direction: reverse;
      }
    }
    &::after {
      height: 100px;
      width: 300px;
      background-color: ${props => props.theme.background.color.neutral};
    }
  }

  /* .rgb-container {
    height: 105px;
    width: 305px;
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    z-index: -5;
  }
  .rgb-background {
    position: absolute;
    width: 100%;
    height: 100%;
    transform-origin: center;
    background: linear-gradient(to right, violet, indigo, blue, green, yellow, orange, red, pink);
    z-index: -5;
  } */
`;
