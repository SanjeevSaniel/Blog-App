import { Link } from "react-router-dom";
import "../ImageGallery/ImageGallery.css";

const ImageGallery = () => {
  return (
    <div className="grid-image-container">
      <Link to="/Information1" className=" grid-images-one">
        <div className="grid-images ">
          <div className="grid-images-caption-one">
            <h2>Lake Louise, AB, Canada</h2>
            <h5>Travel / October 1 2022</h5>
          </div>
        </div>
      </Link>

      <Link to="/Information2" className="two">
        <div className="grid-images-two ">
          <div className="grid-images-caption-two">
            <h2>Barra de Camaratuba, PB, Brazil</h2>
            <h5>Travel / October 2 2022</h5>
          </div>
        </div>
      </Link>

      <Link to="/Information3" className="three">
        <div className="grid-images-three ">
          <div className="grid-images-caption-three">
            <h2>Boating</h2>
            <h5>Travel / October 1 2022</h5>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ImageGallery;
