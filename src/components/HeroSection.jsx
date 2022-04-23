import React from "react";
import styled from "styled-components";

import HeroImg from "../assets/images/logo.svg";
import Typical from "../components/Typical";
// import Button from "./Button";
// import SocialMediaArrow from "../assets/images/scroll-media-arrow.svg";
// import ScrollDownArrow from "../assets/images/scroll-down-arrow.svg";

import { FaCircleNotch } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";

// import Typical from "../components/shared/Typical";

export default function HeroSection() {
  return (
    <HeroStyles>
      <div className="hero">
        <div className="hero__img">
          <img src={HeroImg} alt="" />
        </div>
        {/* <div className="hero__heading">whoami.</div> */}
        <h1 className="hero__heading">
          <span className="hero__name">whoami.</span>
          <span>
            <Typical
              as="h3"
              title_1="Identity Management System"
              title_2="Sign In with Ethereum"
              title_3="#DecentralizedIdentity"
            />
          </span>
        </h1>
      </div>
      <div className="hero__social">
        <div className="hero__social__text">
          <ul>
            <li>
              <a
                href="https://github.com/cuitlazotlac"
                target="_blank"
                rel="noreferrer"
                className="icon"
              >
                <FaGithubSquare />
              </a>
            </li>
            <li>
              <a
                href="https://heyhayssem.dev/"
                target="_blank"
                rel="noreferrer"
              >
                <FaCircleNotch />
              </a>
            </li>
            <li>
              <a
                href="mailto:heyhayssem@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <FaMailBulk />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </HeroStyles>
  );
}

const HeroStyles = styled.div`
  .hero {
    // height: 35vh;
    // width: 100%;
    // text-align: center;
    // display: flex;
    // align-items: center;
    // justify-content: center;
    // position: relative;
  }
  .hero__heading {
    margin-top: 2rem;
    text-align: center;
    font-size: 5rem;
    font-family: var(--display-font);
  }
  .hero__img {
    margin-top: 5rem;
    width: 7%;
    margin-left: auto;
    margin-right: auto;
  }
  .hero__info {
    margin-top: 5rem;
    display: block;
    font-size: 2rem;
    font-weight: 400;
    text-align: left;
  }
  .hero__social,
  .hero__scrollDown {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: absolute;
    // bottom: 20px;
    width: 50px;
  }
  .hero__social {
    left: 50px;
  }
  .hero__scrollDown {
    right: 50px;
  }
  .hero__social__indicator,
  .hero__scrollDown {
    width: 50px;
    p {
      font-size: 1.6rem;
      transform: translateY(-70px) rotate(90deg);
      letter-spacing: 0.7rem;
      text-transform: uppercase;
    }
    img {
      max-height: 45px;
      width: 16px;
      margin: 0 auto;
      object-fit: contain;
    }
  }
  .hero__scrollDown {
    img {
      max-height: 70px;
    }
  }
  .hero__social__text {
    ul {
      li {
        margin-bottom: 1rem;
        a {
          display: inline-block;
          font-size: 2.5rem;
          transform: rotate(360deg);
          letter-spacing: 3px;
          margin-bottom: 1rem;
        }
      }
    }
  }
  @media only screen and (max-width: 768px) {
    .hero__heading {
      margin-top: 2rem;
      text-align: center;
      font-size: 3.5rem;
      font-family: var(--display-font);
    }
    .hero__img {
      margin-top: 5rem;
      width: 20%;
      margin-left: auto;
      margin-right: auto;
    }
    .hero__social {
      left: 2px;
    }
  }
`;
