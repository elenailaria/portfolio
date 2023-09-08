import React from "react";
import "./works.css";
import portfolio1 from "../../assets/portfolio1.png";
import portfolio2 from "../../assets/potfolio2.png";
import portfolio3 from "../../assets/portfolio3.png";
import portfolio4 from "../../assets/portfolio4.png";

const Works = () => {
  return (
    <section className="works">
      <h2 className="worksTitel">My Portfolio</h2>
      <span className="worksDesc">
        From Web Components and UIB to React.JS, Vue.JS, and Node.JS. Check out
        my latest web software development portfolio projects.
      </span>

      <ul className="worksImgs">
        <li>
          <img src={portfolio1} alt="work" className="worksImg" />
          <a className="workClick" href="https://shopping-list-use-reducer.netlify.app/" target="blanck">
          Click me!
        </a>
        </li>

        <li>
          <img src={portfolio2} alt="work" className="worksImg" />
          <a className="workClick" href="https://lucky-numbers-react-component-state.netlify.app/" target="blanck">
          Click me!
        </a>
        </li>
        <li>
          <img src={portfolio3} alt="work" className="worksImg" />
          <a className="workClick" href="https://elena-todo-list.netlify.app/" target="blanck">
          Click me!
        </a>
        </li>
        <li>
          <img src={portfolio4} alt="work" className="worksImg" />
          <a className="workClick" href="https://spa-fetch-rick-and-morty.netlify.app/" target="blanck">
          Click me!
        </a>
        </li>
      </ul>

      <button className="workBtn">
        <a href="https://app.netlify.com/teams/elenailaria" target="blanck">
          See More
        </a>
      </button>
    </section>
  );
};

export default Works;
