import "../Author/Author.css";
import Avatar from "@mui/material/Avatar";

const Author = ({author, avatar}) => {
  return (
    <div className="avatar">
      {/* <img className="avatar-image" alt="Daniel Shi" src={Avatar} /> */}
      <Avatar
        className="avatar-image"
        alt={author}
        // src="https://images.pexels.com/users/avatars/556801/daniel-shi-886.jpeg?auto=compress&fit=crop&h=130&w=130&dpr=2"
        src={avatar}
        sx={{ width: 52, height: 52 }}
      />
      <div className="avatar-info">
        <span className="author">{ author }</span>
        <span className="date">Aug 17, 2019 - 10min read</span>
      </div>
    </div>
  );
};

export default Author;
