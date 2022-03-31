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
    color: var(--font-color);
  }
`;

export default Typography;
