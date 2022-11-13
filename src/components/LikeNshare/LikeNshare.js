import { useState } from "react";
import "../LikeNshare/LikeNshare.css";
import Like from "../LikeNshare/images/rythm.png";
import Share from "../LikeNshare/images/share.png";

const LikeNshare = () => {
  const [like, setLike] = useState(1000),
    [isLike, setIsLike] = useState(false),
    onLikeButtonClick = () => {
      setLike(like + (isLike ? -1 : 1));
      setIsLike(!isLike);
    };

  return (
    <div className="like-n-share">
      <div className="like-container">
        <img
          onClick={onLikeButtonClick}
          className="like-button"
          src={Like}
          alt="Like Button"
        />
        <span className="like-count">{like}</span>
      </div>
      <div className="share-container">
        <img className="share-button" src={Share} alt="Share Button" />
        <span className="share-text">Share this article</span>
      </div>
    </div>
  );
};

export default LikeNshare;
