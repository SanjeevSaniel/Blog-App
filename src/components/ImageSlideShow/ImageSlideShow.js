import SimpleImageSlider from "react-simple-image-slider";
import "../ImageSlideShow/ImageSlideshow.css";

const ImageSlideshow = ({ images }) => {
  return (
    <div className="slideshow-container">
      <div className="slider">
        <SimpleImageSlider
          width={750}
          height={450}
          images={images}
          showBullets={false}
          showNavs={true}
          autoPlay={true}
          slideDuration={2}
          loop
        />
      </div>
      <div className="slider-mobile">
        <SimpleImageSlider
          width={400}
          height={250}
          images={images}
          showBullets={false}
          showNavs={true}
          autoPlay={true}
          slideDuration={2}
          loop
        />
      </div>
    </div>
  );
};

export default ImageSlideshow;
