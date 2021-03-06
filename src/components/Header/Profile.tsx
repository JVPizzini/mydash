import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData &&
        (
          <Box mr="4" textAlign="right">
            <Text>João Vitor Pizzini</Text>
            <Text color="gray.300" fontSize="small" > joaovitorpizzini@hotmail.com </Text>
          </Box>
        )}
      <Avatar size="md" name="João Pizzini" src="https://github.com/jvpizzini.png" />
    </Flex>
  );
}