import { useState } from "react";
import ScrollToTop from "react-scroll-to-top";
import Divider from "@mui/material/Divider";
import NavbarWithBtn from "../../NavbarWithBtn/NavbarWithBtn";
import LikeNshare from "../../LikeNshare/LikeNshare";
import AuthorNsocial from "../../Author-N-Social/AuthorNsocial";
import Author from "../../Author/Author";
import Like from "../../LikeNshare/images/rythm.png";
import image1 from "../../ImageGallery/images/pexels-daniel-shi-2886202.jpg";
import video1 from "../Information1/b5482bab.mp4";
import "../Information1/Information1.css";
import RelatedPosts from "../../RelatedPosts/RelatedPosts";

const Information1 = () => {
  const [like, setLike] = useState(1000),
    [isLike, setIsLike] = useState(false),
    onLikeButtonClick = () => {
      setLike(like + (isLike ? -1 : 1));
      setIsLike(!isLike);
    };

  return (
    <>
      <div className="information-container">
        <NavbarWithBtn />
        <LikeNshare />
        <div className="information-section-container">
          <section className="information-section">
            <h1>Lake Louise, AB, Canada</h1>
            <AuthorNsocial
              author="Daniel Shi"
              avatar="https://images.pexels.com/users/avatars/556801/daniel-shi-886.jpeg?auto=compress&fit=crop&h=130&w=130&dpr=2"
            />
            <div className="click-zoom">
              <label>
                <input type="checkbox" />
                <img className="image-1" src={image1} alt="" />
              </label>
            </div>
            <p className="about">
              See the Canadian Rockies from a different perspective by taking
              the Lake Minnewanka Cruise on Banff National Park's largest lake.
              The lake is 28 kilometres long, and the only lake in Banff
              National Park open to public motorized boating. Tours are
              available from mid-May to mid-October. As you glide over the
              emerald waters and beside dramatic mountains you will be given an
              interpretive presentation about the unique cultural and
              archeological history of the area. Learn about why the First
              Nations’ name for the lake is “Lake of the Water Spirits” and what
              happened when a dam was constructed and a local settlement
              submerged.
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
              <img
                onClick={onLikeButtonClick}
                className="like-button"
                src={Like}
                alt="Like Button"
              />
              <span className="like-count">{like}</span>
              {/* <span className="like-count">9.3K Claps</span> */}
            </section>
            <Divider />
            <p className="content-writer">Written By</p>
            <Author
              author="Daniel Shi"
              avatar="https://images.pexels.com/users/avatars/556801/daniel-shi-886.jpeg?auto=compress&fit=crop&h=130&w=130&dpr=2"
            />
            <Divider />
          </section>
        </div>
      </div>
      <RelatedPosts />
      {/* <section className="related-posts">
        <div className="post">
          <p className="post-tag">Related reads</p>
          <img
            className="post-image"
            src="https://images.pexels.com/photos/415471/pexels-photo-415471.jpeg?cs=srgb&dl=pexels-james-wheeler-415471.jpg&fm=jpg"
            alt=""
          />
          <h1>Pemberton, BC, Canada</h1>
          <Author
            author="James Wheeler"
            avatar="https://images.pexels.com/users/avatars/558609/james-wheeler-590.jpeg?auto=compress&fit=crop&h=130&w=130&dpr=1"
          />
        </div>
        <div className="post">
          <p className="post-tag">Related reads</p>
          <img
            className="post-image"
            src="https://images.pexels.com/photos/804131/pexels-photo-804131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <h1>Hamden, CT, United States</h1>
          <Author
            author="Happy Face"
            avatar="https://images.pexels.com/users/avatars/264958/the-happiest-face-810.jpeg?auto=compress&fit=crop&h=130&w=130&dpr=1"
          />
        </div>
        <div className="post">
          <p className="post-tag">Related reads</p>
          <img
            className="post-image"
            src="https://images.pexels.com/photos/12935467/pexels-photo-12935467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <h1>Canada</h1>
          <Author
            author="Emma Miertschin"
            avatar="https://images.pexels.com/users/avatars/271960732/emma-miertschin-253.jpeg?auto=compress&fit=crop&h=130&w=130&dpr=1"
          />
        </div>
      </section> */}
      <ScrollToTop className="scroll-arrow" color="#ffffff" smooth />
    </>
  );
};

export default Information1;
