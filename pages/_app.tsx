import type { AppProps } from "next/app";
import Layout from "../components/layouts/main";
import { ChakraProvider } from "@chakra-ui/react";
import theme from '../lib/theme'

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Layout router={router}>
        <Component {...pageProps} key={router.route}></Component>
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
