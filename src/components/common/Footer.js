import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <p className="fw-bold"> Author: --GautamKumar@SoeWin</p>
      <a
        className="text-reset fw-bold"
        href="https://www.facebook.com/groups/390467015549855"
      >
        Click Here to Join Facebook Group
      </a>{" "}
      {" | "}
      <a
        className="text-reset fw-bold"
        href="https://www.youtube.com/channel/UCdLKiOx6aWZZkQvALP3LiDw"
      >
        Click Here to Subscribe YouTube Channel
      </a>
      <p className="fw-bold">
        Backend API Running on: {process.env.REACT_APP_API_URL}
      </p>
    </div>
  );
};

export default Footer;
