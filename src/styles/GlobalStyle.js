import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    --brand-color: #D4F407;
    --border-color: #000000;
    --shadow-color: #46585C
  }
  :root{
    --white : #FFFFF;
    --black: black;
  }
  html{

    font-size: 10px;
    color: var(--font-color);
    background-color: var(--background-color);
  }
  ul,li{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
  img, svg{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  button{
    font-family: var(--main-font);
    font-size: 1.45rem;
    weight: 1px;
    font-weight: 400;
    margin-left: 1rem;
    background: rgb(34,193,195);
    background: linear-gradient(90deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%);
    border: 1px solid var(--border-color);
    border-radius: 1px;
    display: inline-block;
    color: var(--border-color);
    transition: all 0.3s ease-in-out;
    box-shadow: 0 2px 1px rgba(0, 0, 0, 0.4), 0px 0px 50px rgba(0, 0, 0, 0);
    transform-style: preserve-3d;
    padding: 8.5px 35px 8.5px 35px;
    overflow: hidden;
    &:hover {
      color: var(--font-color);
      font-weight: 900;
      background-color: var(--primary-color);
      transform: scale(1.1);
      transform: translate(5px, -5px);
      transform-style: preserve-3d;
      transition: all 0.2s ease-in-out;
      box-shadow: 4px 6px var(--shadow-color);
    }
  }
  .btn__form{
    margin-top: 2rem;
  }
  .input__form{
    display: inline-grid;
    width: 60rem;
  }
  input{
    margin-top: 2rem;
    placeholder: 20rem;
    font-size: 1.7rem;
    font-weight: 200;
    border: 1px solid var(--border-color);
    border-radius: 1px;
    color: var(--font-color);
    transition: all 0.3s ease-in-out;
    transform-style: preserve-3d;
    padding: 5.5px 35px 5.5px 35px;
    overflow: hidden;
    ::placeholder
    {
      color: var(--font-color);
      font-family: var(--main-font);
      opacity: 1;
    }
  }

  .result__form{
    margin-top: 5rem;
    h3{
      font-size: 1.7rem;
      font-weight: 200;
      font-family: var(--display-font);
    }
    img{
      margin-top: 2rem;
      width: 100px;
    }
  }

  .container {
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;
  }
/* Smooth Scroll  */
  [data-scrollbar] {
    height: 100vh;
    overflow: hidden;
    background-color: var(--background-color);
    .scroll-content {
      background-color: var(--dark-bg);
    }
    .scrollbar-track.scrollbar-track-y {
      background: var(--deep-dark);
      .scrollbar-thumb-y {
        background: var(--background-color);
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .input__form{
      display: inline-grid;
      width: 28rem;
    }
`;
export default GlobalStyles;
