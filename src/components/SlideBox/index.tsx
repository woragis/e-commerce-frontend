import { useState } from "react";
import { GrPrevious, GrNext } from "react-icons/gr";
import { StyledSlideBox, SlideShowButtons, SlideNavigation, Slides } from "./style";

const SlideShow = ({ slides }: any) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide(prevSlide => (prevSlide + 1) % slides.length);
    setCurSlideNav(slideOptions[(currentSlide + 1) % slides.length]);
  };

  const prevSlide = () => {
    setCurrentSlide(prevSlide => (prevSlide - 1 + slides.length) % slides.length);
    setCurSlideNav(slideOptions[(currentSlide - 1 + slides.length) % slides.length]);
  };

  const exactSlide = (chosenIndex: number) => {
    setCurrentSlide(chosenIndex);
    setCurSlideNav(slideOptions[chosenIndex]);
  };

  const slidesButton = slides.map((cur: any, index: number) => {
    return <div className={"button"} key={index} onClick={() => exactSlide(index)}></div>;
  });

  const slideOptions = ["slide-one", "slide-two", "slide-three"];
  const [curSlideNav, setCurSlideNav] = useState("slide-one");

  return (
    <StyledSlideBox className='slide-show'>
      <Slides>
        <article className='slide secondary-slide prev-slide'>
          <img src={slides[currentSlide - 1]} alt={`Slide ${(currentSlide - 1 + slides.length) % slides.length}`} />
        </article>
        <article className='slide main-slide'>
          <img src={slides[currentSlide]} alt={`Slide ${currentSlide}`} />
        </article>
        <article className='slide secondary-slide next-slide'>
          <img src={slides[currentSlide + 1]} alt={`Slide ${(currentSlide + 1) % slides.length}`} />
        </article>
      </Slides>

      <SlideNavigation className={"box-nav " + curSlideNav}>{slidesButton}</SlideNavigation>

      <SlideShowButtons className='buttons'>
        <div className='slide-button prev-button' onClick={prevSlide}>
          <GrPrevious />
        </div>
        <div className='slide-button next-button' onClick={nextSlide}>
          <GrNext />
        </div>
      </SlideShowButtons>
    </StyledSlideBox>
  );
};

const SlideBox = () => {
  const Slides = [
    "https://example.com/slide1.jpg",
    "https://example.com/slide2.jpg",
    "https://example.com/slide3.jpg",
    /// outohuosuth
  ];

  return (
    <>
      <SlideShow slides={Slides} />
    </>
  );
};

export default SlideBox;
