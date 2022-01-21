import { Container, Box, Heading } from '@chakra-ui/react'

const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg="red" p={3} mb={6} textAlign="center">
        Hello, I&apos;m a software engineer based on Iran.
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Jamal Kaksouri
          </Heading>
          <p>Betria Design (Development of smart solutions)</p>
        </Box>
      </Box>
    </Container>
  )
}

export default Page
