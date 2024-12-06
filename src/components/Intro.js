import React from "react";
import introStyle from "../CSS/intro.module.css";
import myLogo from "../images/yogesh3.jpg";
import resume from "../Resume/Yogesh M. Anbhavane CV (4).pdf";
import { Link } from "react-scroll";
import { useEffect, useRef } from "react";
import sound from "../sounds/hoverSound.wav";
const Intro = () => {
  const hoverSound = useRef(null);
  const hasUserInteracted = useRef(false);
  useEffect(() => {
    hoverSound.current = new Audio(sound);
    hoverSound.current.volume = 0.05;
    const unlockAudio = () => {
      if (!hasUserInteracted.current) {
        hoverSound.current.play().catch(() => {});
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
  };
  return (
    <>
      <div
        className={`container ${introStyle.container1}`}
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <div className={`flexbox ${introStyle.flexBox}`}>
          <div
            data-aos="fade-right"
            data-aos-duration="3000"
            className={`${introStyle["line-text"]}`}
          >
            <label className={`line1 ${introStyle.line1}`}></label>
            <label className={`name ${introStyle.name}`}> HELLO WORLD </label>
            <div className={`${introStyle.intro}`}>
              <h1>I am Yogesh,</h1>
              <h1>a React.js, UI/UX</h1>
              <h1>& Frontend Developer</h1>
              <div className={`${introStyle.button}`}>
                <div className={`${introStyle['button-group']}`}>
                <Link
                  smooth={true}
                  duration={400}
                  to="about"
                  style={{ cursor: "default" }}
                >
                  <button
                    data-aos="zoom-in-up"
                    data-aos-duration="3000"
                    className={`${introStyle.btn1}`}
                    onMouseEnter={playHoverSound}
                  >
                    About Me
                  </button>
                </Link>
                <Link smooth={true} to="contact" style={{ cursor: "default" }}>
                  <button
                    data-aos="zoom-in-up"
                    data-aos-duration="3000"
                    className={`${introStyle.btn2}`}
                    onMouseEnter={playHoverSound}
                  >
                    GET IN TOUCH
                  </button>
                </Link>
                </div>
                <a href={resume} download="YogeshResume">
                  <button
                    data-aos="zoom-in-up"
                    data-aos-duration="3000"
                    className={`${introStyle.btn3}`}
                    onMouseEnter={playHoverSound}
                  >
                    DOWNLOAD CV
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="3000"
            className={`img-fluid ${introStyle.logo}`}
          >
            <img src={myLogo} alt="MyPicture" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
