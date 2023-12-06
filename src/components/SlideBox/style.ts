import styled from "styled-components";

export const StyledSlideBox = styled.article`
  height: 500px;
  width: 100%;
  border: 1px solid red;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  z-index: 4;
`;

export const Slides = styled.section`
  margin: 30px 0;
  .slide {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    height: 440px;
    text-align: center;
    border: 1px solid blue;
    background-image: linear-gradient(${props => props.theme.background.color.secondary}, ${props => props.theme.background.color.main});
  }
  .main-slide {
    background-color: rgba(0, 255, 0, 0.5);
    margin: 0 auto;
    border: 1px solid red;
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
  background-color: ${props => props.theme.background.color.secondary};
  border: 1px solid ${props => props.theme.background.color.main};

  .button {
    background-color: ${props => props.theme.background.color.main};
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
