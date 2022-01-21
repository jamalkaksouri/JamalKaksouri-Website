import NextLink from 'next/link'
import {
  Container,
  Box,
  Heading,
  Image,
  Link,
  useColorModeValue,
  Button
} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'

const Page = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        p={3}
        mb={6}
        textAlign="center"
      >
        Hello, I&apos;m a software engineer based in Iran.
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Jamal Kaksouri
          </Heading>
          <p>Betria Design (Development of smart solutions)</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/me.jpg"
            alt="Profile Image"
          />
        </Box>
      </Box>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          I&apos;m Jamal Kaksouri Seven-year of software development with
          methods of high-performance software. I focus on SOLID principles and
          object-oriented programming. I&apos;m well-practiced and well-versed
          in many facets of software development: - Implementation - Design
          Patterns - Architecture - Testing - Distributed Systems - Domain
          Driven Design - Product Development I make software. I keep getting
          better. program to an interface and not an implementation. See my{' '}
          <NextLink href="/works/projects">
            <Link>projects</Link>
          </NextLink>
          .
        </Paragraph>
        <Box textAlign="center" my={4}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>
      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1991</BioYear>
          Born in Iran(Boukan),
        </BioSection>
        <BioSection>
          <BioYear>2018</BioYear>
          Complete the Master of degree in Software Engineer at Isfahan
          University
        </BioSection>
        <BioSection>
          <BioYear>2018 to present</BioYear>
          Fulltime programming with Backend and Frontend via Dotnet technology
          and etc.
        </BioSection>
      </Section>
      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Swimming, Music, Draving , Playing ping pong, Mountaineering , Machine
          Learning
        </Paragraph>
      </Section>
    </Container>
  )
}

export default Page
