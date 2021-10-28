//React
import { forwardRef, ForwardRefRenderFunction } from "react";

//Chakra
import { FormControl, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps,FormErrorMessage } from "@chakra-ui/react";

//hook-form
import { FieldError } from 'react-hook-form'

interface InputProps extends ChakraInputProps {
  name: string,
  label?: string,
  error?: FieldError,

}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ name, label,error = null, ...rest }, ref) => {
  return (
    <FormControl isInvalid={!!error}>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <ChakraInput
        id={name}
        name={name}
        type="email"
        variant="filled"
        bg="gray.900"
        focusBorderColor="pink.500"
        _hover={{ bgColor: "gray.900" }}
        size="lg"
        ref={ref}
        {...rest}
      />

      {!!error && (
        <FormErrorMessage>
          {error.message}
        </FormErrorMessage>
      )}
    </FormControl>

  );
}

export const Input = forwardRef(InputBase);