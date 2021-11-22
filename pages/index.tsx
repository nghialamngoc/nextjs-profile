import type { NextPage } from "next";
import { Container, Box, Heading, Image } from "@chakra-ui/react";
import styles from "../styles/Home.module.scss";
import Section from "../components/section";
import Head from 'next/head'
import { BioSection, BioYear } from "../components/bio";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Home Page</title>
      </Head>
      <Container>
        <Box borderRadius="lg" bg="red" p={3} mb={6} mt={6} align="center">
          Hello, I&apos;m a full-stack developer based in Vn
        </Box>
        <Box display={{ md: "flex" }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Lam Ngoc Nghia
            </Heading>
            <p>Full-stack developer</p>
          </Box>
        </Box>
        <Box flexShrink={0} mt={{ base: 4, md: 0 }} textAlign="center">
          <Image className={styles.avatar} src="/images/avatar.jpg"></Image>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3">Work</Heading>
          <p>Paragraph</p>
        </Section>
        <Section delay={1}>
          <Heading as="h3">Bio</Heading>
          <BioSection>
          <BioYear>1993</BioYear>
          Born in Quảng Ngãi, VietNam.
        </BioSection>
        </Section>
      </Container>
    </div>
  );
};

export default Home;
