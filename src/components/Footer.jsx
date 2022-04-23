import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <FooterStyle>
      <div className="container">
        <p>Check documentations for more details :</p>
        <div className="footer__col1">
          <a
            href="https://developers.idx.xyz/learn/welcome/"
            target="_blank"
            rel="noreferrer"
          >
            <button>IDX Documentation</button>
          </a>
        </div>
        <div className="footer__col2">
          <a
            href="https://developers.ceramic.network/learn/welcome/"
            target="_blank"
            rel="noreferrer"
          >
            <button>Ceramic Network Documentation</button>
          </a>
        </div>
      </div>
    </FooterStyle>
  );
}

const FooterStyle = styled.div`
  font-family: var(--main-font);
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  color: white;
  text-align: center;
  background-color: #181818;
  background-position: center;
  background-size: cover;
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
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
    margin-bottom: 0.5rem;
  }
  @media only screen and (max-width: 768px) {
    padding-top: 1.5rem;
    padding-bottom: 2rem;
    .container {
      display: flex;
      gap: 0.5rem;
    }
    .footer__col1 .para {
      max-width: 100%;
    }
  }
`;
