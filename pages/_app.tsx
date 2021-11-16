import Head from "next/head";
import { ThemeProvider } from "styled-components";
import "../styles/globals.css";
import { darkTheme } from "../constants";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Paint.o.mania</title>
      </Head>
      <ThemeProvider theme={darkTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
