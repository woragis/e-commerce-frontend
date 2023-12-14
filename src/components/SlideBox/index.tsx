import { useState } from "react";
import { GrPrevious, GrNext } from "react-icons/gr";
import { StyledSlideBox, SlideShowButtons, SlideNavigation, Slides, Slide } from "./style";

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
  const slidesData = [
    {
      name: "Tails",
      path: "https://i.ytimg.com/vi/RuzY069aPH8/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCCtJH7szwJxJA8C8ZimFXm6EdySg",
    },
    { name: "Wallpaper Moon", path: "https://img.freepik.com/fotos-gratis/uma-pintura-de-um-lago-de-montanha-com-uma-montanha-ao-fundo_188544-9126.jpg" },
    { name: "Wallpaper desert", path: "https://c4.wallpaperflare.com/wallpaper/586/603/742/minimalism-4k-for-mac-desktop-wallpaper-preview.jpg" },
  ];
  const slidesComponent = slidesData.map(({ name, path }, index) => {
    if (index === 0) {
      return <Slide $slideName={name} $slideUrl={path} className='secondary-slide prev-slide' />;
    } else if (index === 1) {
      return <Slide $slideName={name} $slideUrl={path} className='main-slide' />;
    } else if (index === 2) {
      return <Slide $slideName={name} $slideUrl={path} className='secondary-slide next-slide' />;
    }
  });

  // <Slide className='slide secondary-slide prev-slide'>
  //   <img src={slides[currentSlide - 1]} alt={`Slide ${(currentSlide - 1 + slides.length) % slides.length}`} />
  // </Slide>
  // <Slide className='slide main-slide'>
  //   <img src={slides[currentSlide]} alt={`Slide ${currentSlide}`} />
  // </Slide>
  // <Slide className='slide secondary-slide next-slide'>
  //   <img src={slides[currentSlide + 1]} alt={`Slide ${(currentSlide + 1) % slides.length}`} />
  // </Slide>
  return (
    <StyledSlideBox className='slide-show'>
      <Slides>{slidesComponent}</Slides>

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
    "https://i.ytimg.com/vi/RuzY069aPH8/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCCtJH7szwJxJA8C8ZimFXm6EdySg",
    "https://img.freepik.com/fotos-gratis/uma-pintura-de-um-lago-de-montanha-com-uma-montanha-ao-fundo_188544-9126.jpg",
    "https://c4.wallpaperflare.com/wallpaper/586/603/742/minimalism-4k-for-mac-desktop-wallpaper-preview.jpg",
  ];

  return (
    <>
      <SlideShow slides={Slides} />
    </>
  );
};

export default SlideBox;
