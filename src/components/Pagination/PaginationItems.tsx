import { Button } from "@chakra-ui/react";

interface PaginationItemsProps {
  number: number;
  isCurrent?: boolean;
}

export function PaginationItems({ isCurrent = false, number }: PaginationItemsProps) {
  if (isCurrent) {
    return (
      <Button
        colorScheme="pink"
        disabled
        _disabled={{
          bg: 'pink.500',
          cursor: 'default'
        }}
        size="sm"
        fontSize="xs"
      >
        {number}
      </Button>
    );
  }
  return (
    <Button
      bg="gray.700"
      size="sm"
      fontSize="xs"
      _hover={{
        bg: 'gray.600'
      }}

    >
       {number}
    </Button>
  );
}