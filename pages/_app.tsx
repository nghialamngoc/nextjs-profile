import type { AppProps } from "next/app";
import Layout from "../components/layouts/main";
import { ChakraProvider } from "@chakra-ui/react";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ChakraProvider>
      <Layout router={router}>
        <Component {...pageProps} key={router.route}></Component>
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
