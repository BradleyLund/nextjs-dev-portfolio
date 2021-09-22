import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import customTheme from "../styles/theme";
import "bootstrap/dist/css/bootstrap.min.css";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={customTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
