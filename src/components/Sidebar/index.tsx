//chakra-ui
import { Box, Stack } from '@chakra-ui/react';

//React
import { RiContactsLine, RiDashboardLine, RiInputMethodLine, RiGitMergeLine } from 'react-icons/ri';
import { NavLink } from './NavLink';
import { NavSection } from './NavSection';

export function Sidebar() {
  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" align="stretch">

        <NavSection title="MENU">
          <NavLink icon={RiDashboardLine}>Dashboard</NavLink>
          <NavLink icon={RiContactsLine}>Users</NavLink>
        </NavSection>
        <NavSection title="AUTOMATION" >
          <NavLink icon={RiInputMethodLine}>Forms</NavLink>
          <NavLink icon={RiGitMergeLine}>Automation</NavLink>
        </NavSection>
      </Stack>

    </Box>
  );
}