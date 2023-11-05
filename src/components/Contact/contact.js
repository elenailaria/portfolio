import "./contact.css";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5ps5w1m",
        "template_4qb13am",
        form.current,
        "WJPnnQO2Rom2A2KCh"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert("Email sent!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section className="contactPage">
      <div id="contact">
        <h2 className="contactTitel">Contact me:</h2>
        <span className="contactDesc">
          Please fill out the form below to discuss any work opportunities.
        </span>
        <form onSubmit={sendEmail} className="contactForm" ref={form}>
          <input
            className="name"
            type="text"
            placeholder="Your Name"
            name="your_name"
          />
          <input
            className="email"
            type="email"
            placeholder="Your email"
            name="your_email"
          />
          <textarea
            className="msg"
            name="message"
            rows="5"
            placeholder="Your message ..."
          ></textarea>
          <button className="submitBtn" type="submit" value="send">
            Submit
          </button>

          <ul className="links">
            <li>
              <a href="https://github.com/elenailaria" target="blanck">
                <FontAwesomeIcon className="link" icon={faGithub} />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/elena-c-ba3321290"
                target="blanck"
              >
                <FontAwesomeIcon className="link" icon={faLinkedin} />
              </a>
            </li>
            <li>
              <FontAwesomeIcon className="link" icon={faPhone} color="black" />
            </li>
          </ul>
        </form>
      </div>
    </section>
  );
};

export default Contact;
