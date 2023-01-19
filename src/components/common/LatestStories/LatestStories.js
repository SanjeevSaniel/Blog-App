import { useRef } from "react";
import Divider from "@mui/material/Divider";
import "../LatestStories/LatestStories.css";
import Slider from "react-slick";

// https://stackoverflow.com/questions/64776116/how-to-execute-slicknext-method-in-react-slick-carousel
const LatestStories = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    swipeToSlide: true,
  };

  const settingsMobile = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    swipeToSlide: true,
  };

  const sliderRef = useRef();
  const sliderRef2 = useRef();

  // const gotoNext = () => {
  //   sliderRef.current.slickNext();
  // };

  return (
    <div className="latest-stories-container">
      <div className="stories-header">
        <h1 className="ls-heading">Latest Stories</h1>
        <hr className="ls-hr" />
      </div>
      <Divider />
      <div className="latest-stories-internal-container">
        <Slider ref={sliderRef} {...settings} className="latest-stories">
          {/* <button className="btn" onClick={gotoNext}>
            View More
          </button> */}
          <div className="latest-stories-info latest-stories-one">
            <h1 className="title">Catch waves with an adventure guide</h1>
            <p className="description">
              Gujarat is vastly underrated and it's a mystery to us why the
              region isn't more well-known as a tourist destination.
            </p>
            <p className="date">
              <span className="category">Tech</span>
              <span> / October 3 2022</span>
            </p>
          </div>
          <div className="latest-stories-info latest-stories-one">
            <h1 className="title">Catch waves with an adventure guide</h1>
            <p className="description">
              Gujarat is vastly underrated and it's a mystery to us why the
              region isn't more well-known as a tourist destination.
            </p>
            <p className="date">
              <span className="category">Tech</span>
              <span> / October 3 2022</span>
            </p>
          </div>
          <div className="latest-stories-info latest-stories-two">
            <h1 className="title">Catch waves with an adventure guide</h1>
            <p className="description">
              Gujarat is vastly underrated and it's a mystery to us why the
              region isn't more well-known as a tourist destination.
            </p>
            <p className="date">
              <span className="category">Style</span>
              <span> / October 3 2022</span>
            </p>
          </div>
          <div className="latest-stories-info latest-stories-three">
            <h1 className="title">Catch waves with an adventure guide</h1>
            <p className="description">
              Gujarat is vastly underrated and it's a mystery to us why the
              region isn't more well-known as a tourist destination.
            </p>
            <p className="date">
              <span className="category">Tech</span>
              <span> / October 3 2022</span>
            </p>
          </div>
        </Slider>

        <Slider
          ref={sliderRef2}
          {...settingsMobile}
          className="latest-stories-mobile"
        >
          {/* <button className="btn" onClick={gotoNext}>
            View More
          </button> */}
          <div className="latest-stories-info latest-stories-one">
            <h1 className="title">Catch waves with an adventure guide</h1>
            <p className="description">
              Gujarat is vastly underrated and it's a mystery to us why the
              region isn't more well-known as a tourist destination.
            </p>
            <p className="date">
              <span className="category">Tech</span>
              <span> / October 3 2022</span>
            </p>
          </div>
          <div className="latest-stories-info latest-stories-one">
            <h1 className="title">Catch waves with an adventure guide</h1>
            <p className="description">
              Gujarat is vastly underrated and it's a mystery to us why the
              region isn't more well-known as a tourist destination.
            </p>
            <p className="date">
              <span className="category">Tech</span>
              <span> / October 3 2022</span>
            </p>
          </div>
          <div className="latest-stories-info latest-stories-two">
            <h1 className="title">Catch waves with an adventure guide</h1>
            <p className="description">
              Gujarat is vastly underrated and it's a mystery to us why the
              region isn't more well-known as a tourist destination.
            </p>
            <p className="date">
              <span className="category">Style</span>
              <span> / October 3 2022</span>
            </p>
          </div>

          <div className="latest-stories-info latest-stories-three">
            <h1 className="title">Catch waves with an adventure guide</h1>
            <p className="description">
              Gujarat is vastly underrated and it's a mystery to us why the
              region isn't more well-known as a tourist destination.
            </p>
            <p className="date">
              <span className="category">Tech</span>
              <span> / October 3 2022</span>
            </p>
          </div>
        </Slider>

        <Divider />
      </div>
    </div>
  );
};

export default LatestStories;
