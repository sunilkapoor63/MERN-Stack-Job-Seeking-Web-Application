import React, { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import { FaFacebookF, FaGithub, FaLinkedin} from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div>&copy; All Rights Reserved By JobZee.</div>
      <div>
        <Link to={"https://www.facebook.com/profile.php?id=100025095902499"} target="_blank">
          <FaFacebookF />
        </Link>
        <Link to={"https://github.com/sunilkapoor63"} target="_blank">
          <FaGithub />
        </Link>
        <Link to={"https://www.linkedin.com/in/sunil-kapoor01/"} target="_blank">
          <FaLinkedin />
        </Link>
        <Link to={"https://www.instagram.com/sunilkapoor672/"} target="_blank">
          <RiInstagramFill />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
