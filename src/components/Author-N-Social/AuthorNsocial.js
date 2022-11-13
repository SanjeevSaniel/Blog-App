// import Avatar from "@mui/material/Avatar";
// import Avatar from "../Author-N-Social/Mask-Group-16.png";
import Author from "../Author/Author";
import "../Author-N-Social/AuthorNsocial.css";
import SocialFollow from "../SocialFollow/SocialFollow";

const AuthorNsocial = (props) => {
  return (
    <div className="avatar-n-social">
      <Author author={props.author} avatar={props.avatar} />
      {/* <div className="avatar">
        <Avatar
          className="avatar-image"
          alt="Daniel Shi"
          src="https://images.pexels.com/users/avatars/556801/daniel-shi-886.jpeg?auto=compress&fit=crop&h=130&w=130&dpr=2"
          sx={{ width: 52, height: 52 }}
        />
        <div className="avatar-info">
          <span className="author">Daniel Shi</span> <br />
          <span>Aug 17, 2019 - 10min read</span>
        </div>
      </div> */}
      <div className="social-links">
        <SocialFollow instagram={props.instagram}/>
      </div>
    </div>
  );
};

export default AuthorNsocial;
