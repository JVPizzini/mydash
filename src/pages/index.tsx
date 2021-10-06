//Chakra
import { Flex, Button, Stack } from '@chakra-ui/react'

//Components
import { Input } from '../components/Form/Input';


export default function SignIn() {
  return (
    <Flex w="100vw" h="100vh" alignItems="center" justifyContent="center">
      <Flex as="form" w="100%" maxWidth={420} bg="gray.800" p="8" borderRadius={8} flexDir="column">
        <Stack space="4">
          <Input name="login" type="email" label="Login" />
          <Input name="password" type="password" label="Password" />
        </Stack>
        <Button colorScheme="pink" mt="6" size="lg">Log In</Button>
      </Flex>
    </Flex>
  )
}
