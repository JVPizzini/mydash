//React
import { SubmitHandler, useForm } from 'react-hook-form';

//Chakra
import { Flex, Button, Stack } from '@chakra-ui/react';

// Yup
import * as yup from 'yup';

// hook-form
import { yupResolver } from '@hookform/resolvers/yup';

//Components
import { Input } from '../components/Form/Input';

type SignInFormDate = {
  email: string;
  password: string;
};

const singInSchema = yup.object().shape({
  email   : yup.string().required().email().trim(),
  password: yup.string().required().trim(),
})

export default function SignIn() {

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(singInSchema)
  })

  const { errors } = formState

  const handleSignIn: SubmitHandler<SignInFormDate> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log(values);
  }

  return (
    <Flex w="100vw" h="100vh" alignItems="center" justifyContent="center">
      <Flex
        as="form"
        w="100%"
        maxWidth={420}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack space="4">
          <Input
            name="email"
            type="email"
            label="Login"
            error={errors.email}
            {...register("email")} />
          <Input
            name="current-password"
            type="current-password"
            label="Password"
            error={errors.password}
            {...register("password")} />
        </Stack>
        <Button
          type
          ="submit"
          colorScheme="pink"
          mt="6"
          size="lg"
          isLoading={formState.isSubmitting}
        >
          Log In</Button>
      </Flex>
    </Flex>
  )
}
