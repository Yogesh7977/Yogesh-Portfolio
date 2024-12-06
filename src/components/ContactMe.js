import React from "react";
import { Element } from "react-scroll";
import contactStyle from "../CSS/contactMe.module.css";
import Aos from "aos";
import resume from "../Resume/Yogesh M. Anbhavane CV (4).pdf";
import { useEffect, useRef } from "react";
import sound from "../sounds/hoverSound.wav";
const ContactMe = () => {
  useEffect(() => {
    Aos.init();
  });

  const handleEmailClick = () => {
    const recipient = "anbhavaneyogesh@gmail.com";
    const mailtoLink = `mailto:${recipient}`;
    window.location.href = mailtoLink;
  };


  const hoverSound =  useRef(null); ;
    const hasUserInteracted = useRef(false);
    useEffect(() => {
      hoverSound.current = new Audio(sound);
      hoverSound.current.volume = 0.05;
      const unlockAudio = () => {
        if (!hasUserInteracted.current) {
        hoverSound.current.play().catch(()=>{});
        hoverSound.current.pause();
        hoverSound.current.currentTime = 0;
        hasUserInteracted.current = true; 
      }
      };

      document.addEventListener("mouseover", unlockAudio);
      document.addEventListener("click", unlockAudio);

      return () => {
        document.removeEventListener("mouseover", unlockAudio);
      document.removeEventListener("click", unlockAudio);
      };
    }, []);

  const playHoverSound = () => {
    if (hoverSound.current) {
      hoverSound.current.currentTime = 0; 
      hoverSound.current.play().catch((error) => {
        console.error("Error playing hover sound:", error);
      });
    }
  } 
  return (
    <>
      <Element name="contact">
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className={`container ${contactStyle.container}`}
          style={{ marginTop: "70px", position: "relative" }}
        >
          <h1 className={`${contactStyle.zeroThree}`}>03</h1>
          <h1
          className={`${contactStyle.title}`}
            style={{
              position: "relative",
              top: "43px",
              fontFamily: "serif",
              fontSize: "55px",
              marginBottom: "12rem",
            }}
          >
            Get In Touch
          </h1>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className={`container ${contactStyle.container2}`}
        >
          <div
            data-aos="zoom-in-up"
            data-aos-duration="3000"
            className={`${contactStyle.description}`}
          >
            <p>
              Let's Connect I'm always open to exciting new opportunities and
              collaborations! If you're interested in working together, have a
              question about my work, or just want to chat, feel free to reach
              out. I'm available for freelance projects, full-time
              opportunities, or any business inquiries. Simply drop me a
              message, and I'll get back to you as soon as possible.
            </p>
          </div>
          <div data-aos="zoom-in-up"
            data-aos-duration="3000" className={`${contactStyle.navigationLinks}`}>

          
          <div >
            <h3>Follow Me</h3>
            <a
              className={`${contactStyle.ancor}`}
              href="https://www.instagram.com/yogesh_7977/"
              target="_blank"
              rel="noreferrer"
            >
              <li className={`${contactStyle.list}`} onMouseEnter={playHoverSound}>
                <h5>Instagram</h5>
              </li>
            </a>
            <a
              className={`${contactStyle.ancor}`}
              href="https://www.linkedin.com/in/yogesh-anbhavane-50326030a/"
              target="_blank"
              rel="noreferrer"
            >
              <li className={`${contactStyle.list}`} onMouseEnter={playHoverSound}>
                <h5>LinkedIn</h5>
              </li>
            </a>
          </div>
          <div
          >
            <h3>Contact Me</h3>
            <li className={`${contactStyle.list}`} onMouseEnter={playHoverSound}>
              <h5 onClick={handleEmailClick}>anbhavaneyogesh@gmail.com</h5>
            </li>
            <li className={`${contactStyle.list}`} onMouseEnter={playHoverSound}>
              <h5>+91 7977606462</h5>
            </li>
          </div>
          </div>
        </div>
        <div data-aos="zoom-in-up"
            data-aos-duration="3000" className={`container ${contactStyle.container3}`}>
          <button
            className={`${contactStyle.btn}`}
            type="button"
            onClick={handleEmailClick}
            onMouseEnter={playHoverSound}
          >
            MESSAGE ME
          </button>
          <a href={resume} download="YogeshResume">
            <button
              className={`${contactStyle.btn}`}
              type="button"
              onMouseEnter={playHoverSound}
            >
              GET MY CV
            </button>
          </a>
        </div>
      </Element>
    </>
  );
};

export default ContactMe;
