import React from "react";
import { Element } from "react-scroll";
import { useEffect, useRef, useState } from "react";
import aos from "aos";
import "aos/dist/aos.css";
import workStyle from "../CSS/works.module.css";
import hybridXpayReplica from "../images/hybridXpay replica.png";
import iNoteBook from "../images/iNoteBook.png";
import kanbanBoard from "../images/kanbanBoard.png";
import sound from "../sounds/hoverSound.wav";
import taskTracker from "../images/taskTracker.png";
import movieDetails from "../images/movieDetails.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";


const Works = () => {
  useEffect(() => {
    aos.init();
  }, []);

  const [showMore, setShowMore] = useState(false);

  let work = [
    {
      previewLink: "https://kanban-board-nine-sand.vercel.app",
      githubLink: "https://github.com/Yogesh7977/Kanban-Board",
      image: kanbanBoard,
      title: "Kanban Board",
      description:
        "The Kanban Board project offers a simple and intuitive interface for teams or individuals to manage their tasks and projects efficiently. It visualizes work in progress, enables prioritization, and ensures that the workflow remains unblocked and organized with Drag-Drop Functionality.",
      date: "24 November 2024",
      technologiesUsed: "React.js, Bootstrap, HTML5, CSS3, Python, AWS",
      KeyFeatures:
        "Responsive design, Drag-Drop Functionality, Customizable Columns Mobile-Friendly Design,  ",
    },
    {
      previewLink: "https://hybrid-x-pay-replica.vercel.app/",
      githubLink: "https://github.com/Yogesh7977/HybridXPay-Replica",
      image: hybridXpayReplica,
      title: "HybridX Pay Replica - Front-End Web Development Project",
      description:
        "The HybridXPay Replica is a UI-focused clone of the HybridXPay landing website, designed to replicate the clean, modern aesthetic and functionality of the original platform. This project showcases an attractive, responsive layout with smooth animations and a well-structured design. It includes key sections like the Home, About, and Contact pages, all with eye-catching animations to enhance the user experience. This replica serves as a perfect example of how to create a dynamic landing page with React, modern CSS techniques, and interactive UI elements.",
      date: "September 2024",
      technologiesUsed: "React.js, Bootstrap, HTML5, CSS3",
      KeyFeatures:
        "Responsive Design, Interactive UI, Stunning Animations, interactive form, Fast Performance",
    },
    {
      image: iNoteBook,
      title: "iNoteBook - Secure Note Management System",
      description:
        "A dynamic note-taking application developed with React.js and Node.js, allowing users to log in, create, save, and organize notes effortlessly. The app features secure access, search functionality, and a user-friendly interface, perfect for managing personal notes.",
      date: "September 2024",
      technologiesUsed: "React.js, Node.js, MongoDB, HTML5, CSS3",
      KeyFeatures:
        "Secure login, seamless note management, search functionality, intuitive UI",
    },
    {
      previewLink: "https://task-tracker-pi-ten.vercel.app/",
      githubLink: "https://github.com/Yogesh7977/task-tracker",
      image: taskTracker,
      title: "Task-Tracker",
      description:
        "The Task Tracker App is a comprehensive tool designed to help users efficiently manage their tasks and stay organized. With a clean, user-friendly interface, the app offers essential features such as adding, editing, deleting, searching, filtering, and setting priorities for tasks. This makes it an ideal solution for anyone looking to streamline their task management and boost productivity",
      date: "October 2024",
      technologiesUsed: "react.js, html/CSS, JavaScript, Boostrap",
      KeyFeatures:
        ",Add Tasks, Delete Tasks, Edit Tasks, Search Tasks, Filter Tasks, Set Task Priorities",
    },
    {
      previewLink: "https://movie-details-rust.vercel.app/",
      githubLink: "https://github.com/Yogesh7977/Movie-Details",
      image: movieDetails,
      title: "Movie Details",
      description:
        "The Movie Details Website is a user-friendly platform designed for movie enthusiasts to explore trending movies and TV shows in real-time. Users can register, log in, and browse through detailed information about their favorite movies, including ratings, original language, and more. The site ensures a secure and personalized experience by restricting access to registered users, making it an engaging destination for cinephiles",
      date: "November 2024",
      technologiesUsed: "react.js, html/CSS, JavaScript, Boostrap, TMDB API",
      KeyFeatures:
        "User Authentication,  Trending Movies and TV Shows, Detailed Movie Information, Pagination Support, Responsive Design,  Intuitive Navigation, Real-Time Updates",
    },
  ]; 

  const handleClick = (link) => {
    if (link) {
      window.open(link, "_blank");
    } else {
      alert("no link Available");
    }
  };

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
      <Element name="works">
        <div className={`container ${workStyle.container}`} data-aos="fade-up" data-aos-duration="3000">
          <div
            style={{ marginTop: "150px", position: "relative", maxWidth:"80%"}}
          >
            <h1 className={`${workStyle.zeroOne}`}>02</h1>
            <h1
              style={{
                position: "relative",
                top: "43px",
                fontFamily: "serif",
                fontSize: "55px",
                marginBottom: "12rem",
              }}
            >
              Persnol Works
            </h1>
          </div>
          <Swiper 
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              slidesPerView={ 'auto' }
              initialSlide={1}
              coverflowEffect={
                {
                  rotate: 0,
                  stretch: 0,
                  depth: 100,
                  modifier: 2.5,
                }
              }
              pagination={{el:'.swiper-pagination', clickable:true}}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
                clickable:true
              }}
              modules={[EffectCoverflow, Pagination, Navigation]}
              className={`swiper_container ${workStyle.swiper_container}`}
              >
              {work.map((item, index) => (
                <SwiperSlide className={`card mb-3 ${workStyle.card}`}
                key={index}>
                  <div className="row g-0">
                    <div className={`${workStyle.imageAndLinks}`}>
                      <img
                        src={item.image}
                        className="img-fluid rounded-start"
                        alt={item.title}
                      />

                      <button
                        className={`${workStyle.VercelLinks}`}
                        onMouseEnter={playHoverSound}
                        onClick={() => handleClick(item.previewLink, "_blank")}
                      >
                        Preview Link
                      </button>
                      <button
                        className={`${workStyle.GithubLinks}`}
                        onMouseEnter={playHoverSound}
                        onClick={() => handleClick(item.githubLink, "_blank")}
                      >
                        github Link
                      </button>
                    </div>

                    <div>
                      <div className={`card-body ${workStyle["card-body"]}`}>
                        <h5 className={`card-title ${workStyle["card-title"]}`}>
                          {item.title}
                        </h5>
                        <small>
                          <b>Date: </b> {item.date}
                        </small>
                        <p className={`card-text ${workStyle["card-text"]}`}>
                          {showMore
                            ? item.description
                            : `${item.description.slice(0, 120)}...`}
                          <button
                            style={{
                              background: "none",
                              border: "none",
                              color: "lightblue",
                              fontSize: "inherit",
                              textDecoration: "underline",
                            }}
                            onClick={() => setShowMore(!showMore)}
                          >
                            {showMore ? "Show Less" : "Learn More"}
                          </button>
                        </p>
                        <p className={`card-text ${workStyle["card-text"]}`}>
                          <b>Technologies Used: </b>
                          {item.technologiesUsed}
                        </p>
                        <p className={`card-text ${workStyle["card-text"]}`}>
                          <b>Key Features: </b>
                          {item.KeyFeatures}
                        </p>
                      </div>
                    </div>
                  </div>
                
              </SwiperSlide>
              ))}
              
              </Swiper>
              <div className={`{${workStyle.sliderContainer}}`}>
              <div className={`slider-controler ${workStyle['slider-controler']}`}>
                <div className={`swiper-button-prev slider-arrow ${workStyle['swiper-button-prev']}`}>
                  <ion-icon name="arrow-back-outline"></ion-icon>
                </div>
                <div className={`swiper-pagination ${workStyle['swiper-pagination']}`}>
                </div>
                <div className={`swiper-button-next slider-arrow ${workStyle['swiper-button-next']}`}>
                  <ion-icon name="arrow-forward-outline"></ion-icon>
                </div>
              </div>
              </div>
        </div>
      </Element>
    </>
  );
};

export default Works;
