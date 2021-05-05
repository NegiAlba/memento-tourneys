import { useState } from 'react'
import {
  useColorMode,
  Switch,
  Flex,
  Button,
  IconButton
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'
import { useAuth } from '@/lib/auth'


export const DarkModeSwitch = () => {

    const { colorMode, toggleColorMode } = useColorMode()
    const isDark = colorMode === 'dark'
    const [display, changeDisplay] = useState('none')
    const auth = useAuth();
  return (
    <Flex>
      <Flex
        position="fixed"
        top="1rem"
        right="5rem"
        align="center"
      >
        {/* Desktop */}
        <Flex
          display={['none', 'none', 'flex','flex']}
        >
          <NextLink href="/" passHref>
            <Button
              as="a"
              variant="ghost"
              aria-label="Home"
              my={5}
              w="100%"
            >
              Home
                    </Button>
          </NextLink>

          <NextLink href="/tourneys" passHref>
            <Button
              as="a"
              variant="ghost"
              aria-label="Tourneys"
              my={5}
              w="100%"
            >
              Tourneys
                    </Button>
          </NextLink>
            {auth.user ? (
                <NextLink href="/profile" passHref>
                    <Button
                    as="a"
                    variant="ghost"
                    aria-label="Profile"
                    my={5}
                    w="100%"
                    >
                    Profile
                    </Button>
                </NextLink>
            ) : (
            <NextLink href="/join" passHref>
                <Button
                as="a"
                variant="ghost"
                aria-label="Join us"
                my={5}
                w="100%"
                >
                Join us !
                </Button>
            </NextLink>
            )}
        </Flex>

        {/* Mobile */}
        <IconButton
          aria-label="Open Menu"
          size="lg"
          mr={2}
          icon={
            <HamburgerIcon />
          }
          onClick={() => changeDisplay('flex')}
          display={['flex', 'flex', 'none', 'none']}
        />
        <Switch
        ml={4}
        my={5}
          color="green"
          isChecked={isDark}
          onChange={toggleColorMode}
        />
      </Flex>

      {/* Mobile Content */}
      <Flex
        w='100vw'
        display={display}
        bgColor="gray.50"
        zIndex={20}
        h="100vh"
        pos="fixed"
        top="0"
        left="0"
        zIndex={20}
        overflowY="auto"
        flexDir="column"
      >
        <Flex justify="flex-end">
          <IconButton
            mt={2}
            mr={2}
            aria-label="Open Menu"
            size="lg"
            icon={
              <CloseIcon />
            }
            onClick={() => changeDisplay('none')}
          />
        </Flex>

        <Flex
          flexDir="column"
          align="center"
        >
          <NextLink href="/" passHref>
            <Button
              as="a"
              variant="ghost"
              aria-label="Home"
              my={5}
              w="100%"
            >
              Home
                    </Button>
          </NextLink>

          <NextLink href="/tourneys" passHref>
            <Button
              as="a"
              variant="ghost"
              aria-label="Tourneys"
              my={5}
              w="100%"
            >
              Tourneys
                    </Button>
          </NextLink>

          <NextLink href="/profile" passHref>
            <Button
              as="a"
              variant="ghost"
              aria-label="Profile"
              my={5}
              w="100%"
            >
              Profile
            </Button>
          </NextLink>
        </Flex>
      </Flex>
    </Flex>
  )
}