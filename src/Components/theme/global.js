import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  transition: 0.4s ease-in-out;

  }
  .styledLink {
    color: ${({ theme }) => theme.styledLink};
  }
  .spacingDot {
    color: ${({ theme }) => theme.dot};
  }
  .about-description {
    color: ${({ theme }) => theme.aboutDescription};
  }
  .card {
    background-color: ${({ theme }) => theme.card};
  }
`;
