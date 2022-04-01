import { createGlobalStyle } from "styled-components";

const Typography = createGlobalStyle`
  @font-face {
    --main-font: 'Heebo';
    --display-font: 'Luckiest Guy';
    font-style: normal;
  }
  html{
    --main-font: 'Heebo';
    --display-font: 'Luckiest Guy';
    color: var(--font-color);
  }
  *{
    // font-family: var(--main-font);
    color: var(--font-color);
  }
`;

export default Typography;
