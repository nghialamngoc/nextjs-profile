import type { NextPage } from 'next'
import { Container, Box, Heading } from '@chakra-ui/react'

const Home: NextPage = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg="red" p={3} mb={6} align="center">
        Hello, I&apos;m a full-stack developer based in Vn
      </Box>
      <Box display={{md: 'flex'}}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Lam Ngoc Nghia
          </Heading>
          <p>Full-stack developer</p>
        </Box>

      </Box>
    </Container>
  )
}

export default Home
