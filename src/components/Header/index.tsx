import Icon from '@chakra-ui/icon';
import { Flex, IconButton, useBreakpointValue } from '@chakra-ui/react';
import { RiMenuLine } from 'react-icons/ri';
import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext';
import { Logo } from './Logo';
import { NotificationNav } from './NotificationNav';
import { Profile } from './Profile';

//components
import { SearchBox } from "./SearchBox"

export function Header() {

  const { onOpen } = useSidebarDrawer()

  const isWideScreen = useBreakpointValue(
    {
      base: false,
      lg: true,
    })

  return (

    <Flex
      as="header"
      w="100%"
      maxW={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      {!isWideScreen && (
        <IconButton
          aria-label="Open navegation"
          icon={<Icon as={RiMenuLine} />}
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          mr="2"
        >
        </IconButton>
      )}

      <Logo />
      {isWideScreen && (<SearchBox />)}
      <Flex align="center" ml="auto">
        <NotificationNav />
        <Profile showProfileData={isWideScreen} />
      </Flex>
    </Flex>

  )
}