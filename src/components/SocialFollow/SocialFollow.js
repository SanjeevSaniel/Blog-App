import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "../SocialFollow/SocialFollow.css";

const SocialFollow = ({ youtube, facebook, twitter, instagram }) => {
  return (
    <div className="social-container">
      <a
        href="https://www.youtube.com/watch?v=ArR-ctuKraE"
        className="youtube social"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faYoutube} size="2x" />
      </a>

      <a
        href="https://www.facebook.com/"
        className="facebook social"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a
        href="https://www.twitter.com/"
        className="twitter social"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a
        href={instagram}
        className="instagram social"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
    </div>
  );
};

export default SocialFollow;
