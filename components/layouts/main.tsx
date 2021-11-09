import Head from "next/head";
import { Box, Container } from "@chakra-ui/react";
import Navbar from "../navbar";
import { NextPage } from "next";
import { Router } from "next/dist/client/router";

interface Props {
  children: any;
  router: Router;
}

const Main: NextPage<Props> = ({ children, router }) => {
  return (
    <Box as="main" padding={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Nghia.Lam - HomePage</title>
      </Head>

      <Navbar path={router.asPath}></Navbar>

      <Container maxW="container.md" pt={10}>
        {children}
      </Container>
    </Box>
  );
};

export default Main;
