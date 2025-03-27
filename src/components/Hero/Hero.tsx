import { BrowserRouter } from "react-router-dom";
import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";
import Illustration from "../../assets/illustration.svg";
import { NavHashLink } from "react-router-hash-link";
import linkedin from "../../assets/linkedin.svg";
import githubIcon from "../../assets/github.svg";
import whatsapp from "../../assets/whatsapp.svg";
import Hello from "../../assets/Hello.gif";
import telegram from "../../assets/telegram.svg";
import React, { useState, useEffect } from "react";

function WordReplacementEffect() {
  const [currentWord, setCurrentWord] = useState("नमस्ते");
  const [animationClass, setAnimationClass] = useState(""); // For animation
  const words = [
    "नमस्ते",
    "Hello",
    "Hi",
    "Hey",
    "Hola",
    "Bonjour",
    "Namaste",
    "Ciao",
    "Hallo",
  ]; // Synonyms of "Hello" in different languages
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setAnimationClass("slide-up"); // Add animation class
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % words.length);
        setAnimationClass(""); // Remove animation class after animation ends
      }, 500); // Match the duration of the animation
    }, 2000); // Replace the word every 2 seconds

    return () => clearInterval(intervalId);
  }, [words.length]);

  useEffect(() => {
    setCurrentWord(words[index]);
  }, [index, words]);

  return { currentWord, animationClass };
}

export function Hero() {
  const { currentWord, animationClass } = WordReplacementEffect();

  return (
    <Container id="home">
      <div className="hero-text">
        <ScrollAnimation animateIn="fadeInUp">
          <p style={{ fontSize: "30px" }}>
            <span className={`word ${animationClass}`}>{currentWord}</span>{" "}
            <img src={Hello} alt="Hello" width="40px" />
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
          <h1>Atishek Singh</h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
          <h3>Full Stack Blockchain Developer</h3>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
          <p className="small-resume">4 Years of Experience</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.8 * 1000}>
          <BrowserRouter>
            <NavHashLink smooth to="#contact" className="button">
              Contact
            </NavHashLink>
          </BrowserRouter>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={1 * 1000}>
          <div className="social-media">
            <a
              href="https://www.linkedin.com/in/atisheks"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedin} alt="Linkedin" />
            </a>
            <a
              href="https://github.com/atisheksingh"
              target="_blank"
              rel="noreferrer"
            >
              <img src={githubIcon} alt="GitHub" />
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=%2B918299634308&text=Hello+Atishek"
              target="_blank"
              rel="noreferrer"
            >
              <img src={whatsapp} alt="Whatsapp" />
            </a>
            <a
              href="https://t.me/SolidityMonk"
              target="_blank"
              rel="noreferrer"
            >
              <img src={telegram} alt="telegram" />
            </a>
          </div>
        </ScrollAnimation>
      </div>
      <div className="hero-image">
        <ScrollAnimation animateIn="fadeInRight" delay={1 * 1000}>
          <img src={Illustration} alt="Ilustração" />
        </ScrollAnimation>
      </div>
    </Container>
  );
}