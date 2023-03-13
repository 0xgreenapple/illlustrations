import globalStyle from "../styles/global.scss";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import defaultTheme from "../styles/theme.config";

const GlobalStyle = createGlobalStyle`
    ${globalStyle}
`;

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
