import NextLink from 'next/link'
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button,
  useColorModeValue
} from '@chakra-ui/react'

const NotFound = () => {
  return (
    <Container>
      <Heading as="h1">Not found</Heading>
      <Text>The page you&apos;re looking for was not found.</Text>
      <Divider my={6} />

      <Box my={6} align="center">
        <NextLink href="/">
          <Button
            bg="transparent"
            border="1px"
            lineHeight={0}
            color={useColorModeValue('#494949', 'yellow300')}
          >
            Return to home
          </Button>
        </NextLink>
      </Box>
    </Container>
  )
}

export default NotFound
