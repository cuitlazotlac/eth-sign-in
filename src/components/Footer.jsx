import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <FooterStyle>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Second Footer</h1>
          <br />
          <button>Documentation</button>
        </div>
        <div className="footer__col2">
          <h1 className="footer__col2__title">Second Footer</h1>
          <br />
          <button>Documentation</button>
        </div>
      </div>
    </FooterStyle>
  );
}

const FooterStyle = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  color: white;
  text-align: center;
  background-color: blue;
  // background-color: var(--brand-color);ß
  background-position: center;
  background-size: cover;
  padding-top: 2rem;
  padding-bottom: 5rem;
  font-size: 1.5rem;
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title,
  .footer__col2__title {
    font-size: 1.7rem;
    margin-bottom: 1rem;
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
  }
`;
