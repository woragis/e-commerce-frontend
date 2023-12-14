import styled from "styled-components";

export const StyledSlideBox = styled.article`
  height: 360px;
  width: 100%;
  /* border: 1px solid red; */
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  background-color: ${props => props.theme.background.color.neutral};
  z-index: 4;
  &::before,
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    width: 30%;
    height: 1px;
    background-color: ${props => props.theme.text.color};
  }
  &::before {
    left: 0;
  }
  &::after {
    right: 0;
  }
`;
export const Slide = styled.div<{ $slideUrl: string; $slideName: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  text-align: center;
  background-image: url(${props => props.$slideUrl});
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  background-clip: border-box;
  position: relative;
  &::before {
    content: ${props => props.$slideName};
    position: absolute;
    z-index: -1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }
`;
export const Slides = styled.section`
  margin: 30px 0;
  .main-slide {
    background-color: rgba(0, 255, 0, 0.5);
    margin: 0 auto;
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
    z-index: 6;
  }
  .secondary-slide {
    position: absolute;
    top: 30px;
    backdrop-filter: blur(5px);
    z-index: 5;
  }
  .prev-slide {
    left: -50%;
  }
  .next-slide {
    right: -50%;
  }
`;

export const SlideNavigation = styled.nav`
  height: 30px;
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.8);
  position: absolute;
  bottom: 10px;
  padding: 3px 5px;
  left: 50%;
  transform: translate(-50%, 0);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  align-items: center;
  grid-gap: 5px;
  z-index: 8;
  background-color: ${props => props.theme.background.color.neutral};
  border: 1px solid ${props => props.theme.background.color.main};

  .button {
    background-color: ${props => props.theme.background.color.secondary};
    height: 20px;
    width: 20px;
    border-radius: 50%;
    z-index: 9;
  }
  .slide-one {
    div:nth-child(1) {
      background-color: ${props => props.theme.background.color.secondary};
    }
  }
  .slide-two {
    div:nth-child(2) {
      background-color: ${props => props.theme.background.color.secondary};
    }
  }
  .slide-three {
    div:nth-child(3) {
      background-color: ${props => props.theme.background.color.secondary};
    }
  }
`;

export const SlideShowButtons = styled.section`
  .slide-button {
    position: absolute;
    height: 100%;
    width: 30%;
    top: 0;

    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9;

    font-size: 5em;
    color: ${props => props.theme.text.color};
    svg {
      visibility: hidden;
      transition: 300ms;
    }
    &:hover {
      cursor: pointer;
      svg {
        visibility: visible;
        transition: 300ms;
      }
    }
  }
  .prev-button {
    left: 0;
    &:hover {
      background-image: linear-gradient(to right, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0));
    }
  }
  .next-button {
    right: 0;
    &:hover {
      background-image: linear-gradient(to left, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0));
    }
  }
`;
