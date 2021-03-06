import Logo from './logo'
import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'
import {
  IoMedalOutline,
  IoGitBranchOutline,
  IoFolderOpenOutline
} from 'react-icons/io5'

const LinkItem = ({ href, path, _target, children, ...props }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
  const inactiveColorBase = useColorModeValue('#4f46e5', '#fbbf24')
  return (
    <NextLink href={href} passHref>
      <Link
        p={2}
        color={active ? inactiveColorBase : inactiveColor}
        _target={_target}
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  )
}

const Navbar = props => {
  const { path } = props

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem
            href="/works"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 2 }}
            pl={2}
          >
            <IoGitBranchOutline />
            Works
          </LinkItem>
          <LinkItem
            href="/posts"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 2 }}
            pl={2}
          >
            <IoFolderOpenOutline />
            Posts
          </LinkItem>
          <LinkItem
            href="/certifications"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 2 }}
            pl={2}
          >
            <IoMedalOutline />
            Certifications
          </LinkItem>
        </Stack>

        <Box flex={1} align="right">
          <ThemeToggleButton />

          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <NextLink href="/works" passHref>
                  <MenuItem
                    as={Link}
                    display="inline-flex"
                    alignItems="center"
                    style={{ gap: 2 }}
                    pl={2}
                  >
                    <IoGitBranchOutline />
                    Works
                  </MenuItem>
                </NextLink>
                <NextLink href="/posts" passHref>
                  <MenuItem
                    as={Link}
                    display="inline-flex"
                    alignItems="center"
                    style={{ gap: 2 }}
                    pl={2}
                  >
                    <IoFolderOpenOutline />
                    Posts
                  </MenuItem>
                </NextLink>
                <MenuItem
                  as={Link}
                  href="/certifications"
                  display="inline-flex"
                  alignItems="center"
                  style={{ gap: 2 }}
                  pl={2}
                >
                  <IoMedalOutline />
                  Certifications
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
