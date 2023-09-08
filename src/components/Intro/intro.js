import React from "react";
import "./intro.css";
import bg from "../../assets/myPhoto.png";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">Elena</span> <br />
          Web Developer{" "}
        </span>
        <p className="introParagraf">
          {" "}
          I build websites <br /> and ensure <br /> they perform reliably <br />{" "}
          and efficiently{" "}
        </p>
      </div>
      <img src={bg} alt="Profile" className="bg" />
    </section>
  );
};

export default Intro;
