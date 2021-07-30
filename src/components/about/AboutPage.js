import React from "react";
import { Link } from "react-router-dom";

const AboutPage = () => (
  <div>
    <h2>About</h2>
    <p>
      This app uses React, Redux, React Router, and many other helpful
      libraries.
    </p>
    <Link to="/" className="btn btn-primary btn-sm">
      Go To Home
    </Link>
  </div>
);

export default AboutPage;
