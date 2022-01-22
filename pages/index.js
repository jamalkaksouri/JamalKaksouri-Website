import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  SimpleGrid,
  Button,
  List,
  ListItem,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoStackoverflow
} from 'react-icons/io5'

import mongo from '../public/images/Certifications/mongo.png'
import distributedSystems from '../public/images/Certifications/Distributed Systems Design Fundamentals.png'

const Home = () => {
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
          <p>Software Engineer (Backend / Frontend)</p>
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
            src="/images/me-main.png"
            alt="Profile Image"
          />
        </Box>
      </Box>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          I&apos;m Jamal Kaksouri. A software engineer with 7 years of coding
          experience and software developer with a high-performance. I focus on
          SOLID principles and object-oriented programming. I&apos;m
          well-practiced and well-versed in many facets of software development:
          Implementation, Design Patterns, Architecture, Testing, Distributed
          Systems, Domain-Driven Design, and Product Development. I try to keep
          getting better in software development. Program to an interface and
          not an implementation. See my{' '}
          <NextLink href="/works/projects">
            <Link>projects</Link>
          </NextLink>
          .
        </Paragraph>
        <Box textAlign="center" my={4}>
          <NextLink href="/work">
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
          Draving , Billiard snooker, Mountaineering , Machine Learning
        </Paragraph>
      </Section>
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/jamalkaksouri" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                @jamalkaksouri
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/jamalkaksouri" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoTwitter} />}
              >
                @jamalkaksouri
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/jk_betria" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoInstagram} />}
              >
                @jk_betria
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://stackoverflow.com/users/4795761/jamal-kaksouri"
              target="_blank"
            >
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoStackoverflow} />}
              >
                @jamal-kaksouri
              </Button>
            </Link>
          </ListItem>
        </List>

        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://university.mongodb.com/course_completion/39b8a055-2704-476e-81a0-0ceaadaa9e12/printable"
            title="Verify from MongoDB University"
            thumbnail={mongo}
          >
            M220N: MongoDB for .NET Developers
          </GridItem>
          <GridItem
            href="https://www.credential.net/9c5f5721-d4f8-4df7-b2c6-2115fa2b0c96#gs.6m640l"
            title="Verify from Particular Software"
            thumbnail={distributedSystems}
          >
            Distributed Systems Design Fundamentals
          </GridItem>
        </SimpleGrid>

        <Box align="center" my={4}>
          <NextLink href="/posts">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Popular posts
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  )
}

export default Home
export { getServerSideProps } from '../components/chakra'
