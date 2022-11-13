import ScrollToTop from "react-scroll-to-top";
import Divider from "@mui/material/Divider";
import NavbarWithBtn from "../../NavbarWithBtn/NavbarWithBtn";
import LikeNshare from "../../LikeNshare/LikeNshare";
import AuthorNsocial from "../../Author-N-Social/AuthorNsocial";
import Author from "../../Author/Author";
import Like from "../../LikeNshare/images/rythm.png";
import image1 from "../../ImageGallery/images/pexels-alexandre-saraiva-carniato-2258349.jpg";
import video1 from "../Information2/production-ID-3891292.mp4";
import "../Information1/Information1.css";
import RelatedPosts from "../../RelatedPosts/RelatedPosts";

const Information2 = () => {
  return (
    <>
      <div className="information-container">
        <NavbarWithBtn />
        <LikeNshare />
        <div className="information-section-container">
          <section className="information-section">
            <h1>Barra de Camaratuba, PB, Brazil</h1>
            <AuthorNsocial
              author="alexandre saraiva carniato"
              avatar="https://images.pexels.com/users/avatars/583650/alexandre-saraiva-carniato-897.jpeg?auto=compress&fit=crop&h=130&w=130&dpr=1"
              instagram="https://www.instagram.com/alexandrecarniato/"
            />
            <div className="click-zoom">
              <label>
                <input type="checkbox" />
                <img className="image-1" src={image1} alt="" />
              </label>
            </div>
            <p className="about">
              Localiza-se precisamente na foz do Rio Camaratuba, próximo à
              divisa com o estado do Rio Grande do Norte e 110 quilômetros ao
              norte de João Pessoa, é o último povoado litorâneo da costa norte
              do estado. Está encravado entre dunas, resquícios de mata
              atlântica e manguezais, onde também foi instalado o Parque
              Ecológico do Caranguejo-uçá.
            </p>

            <video
              className="video-1"
              src={video1}
              autoPlay={true}
              muted
              loop
            ></video>
            <section className="tags">
              <span className="tag-name">Lakeside</span>
              <span className="tag-name">Boating</span>
              <span className="tag-name">Adventure</span>
            </section>
            <section className="like-container">
              <img className="like-button" src={Like} alt="Like Button" />
              <span className="like-count">9.3K Claps</span>
            </section>
            <Divider />
            <p className="content-writer">Written By</p>
            <Author
              author="alexandre saraiva carniato"
              avatar="https://images.pexels.com/users/avatars/583650/alexandre-saraiva-carniato-897.jpeg?auto=compress&fit=crop&h=130&w=130&dpr=1"
            />
            <Divider />
          </section>
        </div>
      </div>
      <RelatedPosts />
      <ScrollToTop className="scroll-arrow" color="#ffffff" smooth />
    </>
  );
};

export default Information2;
