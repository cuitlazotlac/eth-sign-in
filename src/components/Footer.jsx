import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <FooterStyle>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Second Footer</h1>
          <p>Footer</p>
          <br />
        </div>
        <div className="footer__col2"></div>
      </div>
    </FooterStyle>
  );
}

const FooterStyle = styled.div`
  background-color: var(--secondary-color);
  // background-image: url("https://drive.google.com/file/d/1rerm1A_hlBCtEcayZP7vnHkSfjWYHaLS/view?usp=sharing");
  // background-image: url(${"logo"});
  background-position: center;
  background-size: cover;
  padding-top: 5rem;
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
  .footer__col1__title {
    font-size: 3rem;
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
