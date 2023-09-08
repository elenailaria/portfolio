import "./contact.css";
import GitHub from "../../assets/github.jpg";
import Linkedin from "../../assets/linkedin.jpg";
import Phone from "../../assets/phone.jpg";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

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
                <img className="link" src={GitHub} alt="github" />
              </a>
            </li>
            <li>
              <a href="www.linkedin.com/in/elena-c-ba3321290" target="blanck">
                <img className="link" src={Linkedin} alt="linkedin" />
              </a>
            </li>
            <li>
              <img className="link" src={Phone} alt="phone" />
              
            </li>
          </ul>
        </form>
      </div>
    </section>
  );
};

export default Contact;
