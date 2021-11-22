import Head from "next/head";
import { Box, Container } from "@chakra-ui/react";
import Navbar from "../navbar";
import { NextPage } from "next";
import { Router } from "next/dist/client/router";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
  children: any;
  router: Router;
}

const Main: NextPage<Props> = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Navbar path={router.asPath}></Navbar>

      <AnimatePresence exitBeforeEnter initial={false}>
        <motion.div
          key={router.asPath}
          initial={{ x: 0, y: 20, opacity: 0 }}
          animate={{ x: 0, y: 0, opacity: 1 }}
          exit={{ x: 0, y: 0, opacity: 0 }}
          transition={{ duration: 0.4, type: 'easeInOut' }}
        >
          <Container maxW="container.md" pt={14}>
            {children}
          </Container>
        </motion.div>
      </AnimatePresence>
    </Box>
  );
};

export default Main;
