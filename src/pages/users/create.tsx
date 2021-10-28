//React
import { SubmitHandler, useForm, useFormState } from 'react-hook-form';

//chakra-ui
import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

// Yup
import * as yup from 'yup';

// hook-form
import { yupResolver } from '@hookform/resolvers/yup';

//components
import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

type CreateUserFormDate = {
  name: string;
  email: string;
  password: string;
  password_conf: string;
};

const CreateUserFormSchema = yup.object().shape({
  name: yup.string().required().trim(),
  email: yup.string().required().email().trim(),
  password: yup.string().required().min(8).trim(),
  password_conf: yup.string().oneOf([
    null, yup.ref('password')
  ],'Your password is different. Please enter it again!')
})

export default function CreateUser() {

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(CreateUserFormSchema)
  })

  const { errors } = formState;

  const handleCreateUser: SubmitHandler<CreateUserFormDate> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log(values);
  }

  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box
          as="form"
          flex="1"
          borderRadius={8}
          bg="gray.800"
          p={["6", "8"]}
          onSubmit={handleSubmit(handleCreateUser)}
        >
          <Heading size="lg" fontWeight="normal">Create user</Heading>

          <Divider my="6" borderColor="gray.700" />

          <VStack
            spacing="8"
          >
            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input name="name" type="text" label="Full name" {...register("name")} error={errors.name} />
              <Input name="email" type="email" label="E-mail"{...register("email")} error={errors.email} />
            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input name="passoword" type="password" label="Password" {...register("password")} error={errors.password} />
              <Input name="password_conf" type="password" label="Password confirmation" {...register("password_conf")} error={errors.password_conf} />
            </SimpleGrid>
          </VStack>

          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Link href="/users">
                <Button as="a" colorScheme="whiteAlpha" cursor="pointer">Cancel</Button>
              </Link>
              <Button
                type="submit"
                colorScheme="pink"
                isLoading={formState.isSubmitting}
              >
                Save</Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}