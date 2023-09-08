import React from "react";
import "./skill.css";
import Html from "../../assets/html.svg";
import Css from "../../assets/css.svg";
import JavaScript from "../../assets/js.svg";
import ReactLogo from "../../assets/react.svg";
import Git from "../../assets/git.svg";
import GitHub from "../../assets/github.svg";
import Api from "../../assets/api.svg";
import Sass from "../../assets/sass.svg";
import Bootstrap from "../../assets/bootstrap-plain-wordmark.225x256.png";
import Tailwind from "../../assets/tailwind-css.svg";
import VSCode from "../../assets/vscode.svg";
import Responsive from "../../assets/responsive-design.svg";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitel">What I do </span>
      <span className="skillDesc">
        I'm a web developer, creating, building, and maintaining websites and
        web applications that run online on a browser. It may, however, also
        include web design, web programming, and database management.
      </span>
      <h3 className="skillTitel">My Toolbox & Things<br/> I Can Do:</h3>
      <ul className="skillBars">
        <li className="skillBar">
          <img className="skillBarImg" src={Html} alt="html" />
          <h2 className="skillBarText">HTML5</h2>
        </li>
        <li className="skillBar">
          <img className="skillBarImg" src={Css} alt="css" />
          <h2 className="skillBarText">CSS</h2>
        </li>
        <li className="skillBar">
          <img className="skillBarImg" src={JavaScript} alt="javascript" />
          <h2 className="skillBarText">JavaScript</h2>
        </li>
        <li className="skillBar">
          <img className="skillBarImg" src={ReactLogo} alt="react" />
          <h2 className="skillBarText">React</h2>
        </li>
        <li className="skillBar">
          <img className="skillBarImg" src={VSCode} alt="visualcode" />
          <h2 className="skillBarText">VisualCode</h2>
        </li>
        <li className="skillBar">
          <img className="skillBarImg" src={Git} alt="git" />
          <h2 className="skillBarText">Git</h2>
        </li>
        <li className="skillBar">
          <img className="skillBarImg" src={GitHub} alt="github" />
          <h2 className="skillBarText">GitHub</h2>
        </li>
        <li className="skillBar">
          <img className="skillBarImg" src={Api} alt="api" />
          <h2 className="skillBarText">Api's</h2>
        </li>
        <li className="skillBar">
          <img className="skillBarImg" src={Sass} alt="sass" />
          <h2 className="skillBarText">Sass</h2>
        </li>
        <li className="skillBar">
          <img className="skillBarImg" src={Bootstrap} alt="bootstrap" />
          <h2 className="skillBarText">Bootstrap</h2>
        </li>
        <li className="skillBar">
          <img className="skillBarImg" src={Tailwind} alt="tailwind" />
          <h2 className="skillBarText">Tailwind</h2>
        </li>
        <li className="skillBar">
          <img className="skillBarImg" src={Responsive} alt="responsiveWeb" />
          <h2 className="skillBarText">Responsive Websites</h2>
        </li>
      </ul>
    </section>
  );
};

export default Skills;
