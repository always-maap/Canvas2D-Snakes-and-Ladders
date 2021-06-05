import { AppProps } from "next/app";
import "../styles/globals.css";
import { ThemeProvider } from "styled-components";
import { useTheme } from "../hooks/useTheme";
import { dark, light } from "../theme";
import Layout from "../components/Layout";
import { GlobalStyles } from "../theme/globalStyles";

function App({ Component, pageProps }: AppProps) {
  const theme = useTheme((state) => state.theme);

  console.log(theme);

  return (
    <ThemeProvider theme={theme === "light" ? light : dark}>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
