import ScrollToTop from "react-scroll-to-top";
import Divider from "@mui/material/Divider";
import NavbarWithBtn from "../../NavbarWithBtn/NavbarWithBtn";
import LikeNshare from "../../LikeNshare/LikeNshare";
import AuthorNsocial from "../../Author-N-Social/AuthorNsocial";
import Author from "../../Author/Author";
import Like from "../../LikeNshare/images/rythm.png";
import image1 from "../../ImageGallery/images/pexels-photo-301738.jpeg";
import video1 from "../Information3/pexels-creativ-medium-6929784.mp4";
import "../Information1/Information1.css";
import RelatedPosts from "../../RelatedPosts/RelatedPosts";

const Information3 = () => {
  return (
    <>
      <div className="information-container">
        <NavbarWithBtn />
        <LikeNshare />
        <div className="information-section-container">
          <section className="information-section">
            <h1>People Riding Boat on Lake</h1>
            <AuthorNsocial
              author="Pixabay"
              avatar="https://images.pexels.com/users/avatars/2659/pixabay-617.png?auto=compress&fit=crop&h=130&w=130&dpr=2"
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
              <img className="like-button" src={Like} alt="Like Button" />
              <span className="like-count">9.3K Claps</span>
            </section>
            <Divider />
            <p className="content-writer">Written By</p>
            <Author
              author="Pixabay"
              avatar="https://images.pexels.com/users/avatars/2659/pixabay-617.png?auto=compress&fit=crop&h=130&w=130&dpr=2"
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

export default Information3;
