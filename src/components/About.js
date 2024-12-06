import React, { useEffect, useRef } from "react";
import aboutStyle from "../CSS/about.module.css";
import { Element } from "react-scroll";
import Aos from "aos";
import "aos/dist/aos.css";
import { FaReact, FaHtml5, FaJava, FaFigma } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiRedux, SiMysql } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { MdDesignServices } from "react-icons/md";
import { FaGitAlt } from "react-icons/fa6";
import sound from "../sounds/hoverSound.wav";
const About = () => {
  useEffect(() => {
    Aos.init();
  });

  const skills = [{name: "React.js",svg: <FaReact fill="#61DAFB"/>},{name: "JavaScript",svg: <IoLogoJavascript fill="#F7DF1E" />},{name: "Redux",svg: <SiRedux fill="#764ABC"/>,},{name: "HTML/CSS",svg: <FaHtml5 fill="#E34F26"/>,},{name: "Core JAVA",svg: <FaJava fill="#4B4B77"/>,},
    { name: "Figma",svg: <FaFigma fill="#F24E1E"/>,},{name: "MongoDB",svg: <SiMongodb fill="#47A248"/>,},{name: "SQL",svg: <SiMysql fill="#4479A1"/>,},{name: "UI/UX",svg: <MdDesignServices fill="#ED3023"/>,},{name: "GITHUB",svg: <FaGitAlt fill="#F05032"/>,}];

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
      <Element name="about">
          <div data-aos="fade-up" data-aos-duration="3000" className={`container ${aboutStyle.container}`} style={{ marginTop: "150px", position:"relative" }}>
            <h1 className={`${aboutStyle.zeroOne}`}>01</h1>
            <h1
              style={{
                position: "relative",
                top: "43px",
                fontFamily: "serif",
                fontSize: "55px",
              }}
            >
              ABOUT ME
            </h1>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className={`container ${aboutStyle.container}`}
            style={{ marginTop: "10rem" }}
          >
            <p className={`${aboutStyle.para}`} style={{ fontSize: "2rem", fontFamily: "serif" }}>
              Hi, I'm Yogesh Anbhavane, a passionate and creative web developer
              focused on building engaging, high-performance applications with
              React.js. I hold a BSC in IT and have a solid foundation in both
              frontend and backend development, with experience in Java, SQL,
              and MongoDB. Alongside my development skills, I also have a
              background in UI/UX design and use Figma to create intuitive,
              user-friendly interfaces. Currently, I'm dedicating my time to
              mastering React.js to create seamless, interactive user
              experiences. I enjoy working on innovative projects and recently
              developed an investment portfolio tracker and a customer
              self-service portal. I’m excited to keep expanding my knowledge
              and contribute to impactful projects in web development.
            </p>

            <div className={`container ${aboutStyle.EducationSkills}`} style={{ marginTop: "130px" }}>
              <div className={`row ${aboutStyle.row}`}>
                <div className="col">
                  <label className={`line1 ${aboutStyle.line1}`}>
                    <h4>Education</h4>
                  </label>
                  <div data-aos="fade-up" data-aos-duration="3000">
                    <ul>
                      <li>
                        <h5>
                          Mumbai University | Pillai College of Arts, Commerce &
                          Science{" "}
                        </h5>
                        <p>
                          Bachelor of Science in Information Technology{" "}
                          <b>— 8.58 CGPA</b>
                        </p>
                      </li>
                      <li>
                        <h5>
                          Mumbai University | N.N.Paliwala Jr.College, New
                          Panvel{" "}
                        </h5>
                        <p>
                          H.S.C - Science <b>— 62%</b>
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-duration="3000"
                  className={`col ${aboutStyle.skillsColumn}`}
                >
                  <label className={`line1 ${aboutStyle.line1}`}>
                    <h4>Skills</h4>
                  </label>
                  <div>
                    <ul className={`gridcontainer ${aboutStyle.gridcontainer}`}
                    >
                      {skills.map((skill, index) => {
                        return <li key={index} className={`listSkills ${aboutStyle.listSkills}`}  onMouseEnter={playHoverSound}>
                          <div>
                          {skill.svg}
                          <p>{skill.name}</p>
                          </div>
                          </li>;
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </Element>
    </>
  );
};

export default About;
