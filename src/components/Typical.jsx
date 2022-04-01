import React from "react";
import Typical from "react-typical";
import styled from "styled-components";

export default function BannerText({
  title_1,
  title_2,
  title_3,
  title_4,
  title_5,
}) {
  return (
    <TypicalStyles>
      <Typical
        loop={Infinity}
        wrapper="b"
        steps={[
          title_1,
          5000,
          title_2,
          5000,
          title_3,
          5000,
          title_4,
          5000,
          title_5,
          5000,
        ]}
      />
    </TypicalStyles>
  );
}

const TypicalStyles = styled.div`
  width: 100%;
  font-size: 2.5rem;
  font-family: var(--main-font);
  font-weight: 200;
`;
