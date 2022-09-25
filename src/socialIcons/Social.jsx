import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faTwitter,
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import "./social.scss";

export const Social = () => {
  return (
    <div className="social">
      <a href="https://www.twitter.com/nasreddineja" target="blank">
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a href="https://www.facebook.com/nasreddine.jaouadi/">
        <FontAwesomeIcon icon={faFacebook} />
      </a>
      <a href="https://github.com/admiral84" target="blank">
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a
        href="https://www.linkedin.com/in/nasreddine-jaouadi-83b841182/"
        target="blank"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
    </div>
  );
};
