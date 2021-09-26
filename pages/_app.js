import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import customTheme from "../styles/theme";
import "bootstrap/dist/css/bootstrap.min.css";

function MyApp({ Component, pageProps }) {
  return (
    // to use chakra ui we need to wrap the <component> tag in the chakra ui provider component
    <ChakraProvider theme={customTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
