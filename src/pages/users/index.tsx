//chakra-ui
import { Box, Flex, Heading, Button, Icon, Table, Thead, Tr, Th, Td, Checkbox, Tbody, Text } from "@chakra-ui/react";
import React from "react";

//React
import { RiAddLine, RiPencilLine } from "react-icons/ri";

//components
import { Header } from '../../components/Header';
import { Sidebar } from "../../components/Sidebar";
import { Pagination } from "../../components/Pagination";

export default function listUsers() {
  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" boderradius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">Users</Heading>
            <Button
              cursor="pointer"
              as="a"
              size="sm"
              fontSize="sm"
              fontWeight="normal"
              colorScheme="pink"
              leftIcon={<Icon as={RiAddLine} />}>
              New user
            </Button>
          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px="6" color="gray.300" width="8">
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>Users</Th>
                <Th>Registration date</Th>
                <Th width="8"></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">João Vitor Pizzini</Text>
                    <Text fontSize="sm" color="gray.300" >joaovitorpizzini@hotmail.com</Text>
                  </Box>
                </Td>
                <Td>19 de Outubro, 2021</Td>
                <Td>
                  <Button
                    cursor="pointer"
                    as="a"
                    size="sm"
                    fontSize="sm"
                    fontWeight="normal"
                    colorScheme="purple"
                    leftIcon={<Icon as={RiPencilLine} fontSize="16" />}>
                    Edit
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>
          <Pagination />
        </Box>
      </Flex>
    </Box>
  );
}