import React, { useRef } from "react";
import {
  Stack,
  InputGroup,
  InputLeftElement,
  Input,
  Button,
  InputRightElement,
  Box,
} from "@chakra-ui/react";

import { MdCheck } from "react-icons/md";
import { AiOutlineCar } from "react-icons/ai";

interface InputProps {
  sendText: (value: any) => void;
  isLoading?: boolean;
}

function InputPlaca({ sendText, isLoading = false }: InputProps) {
  const [lengthIsValid, setColor] = React.useState("white");
  const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  const submitHandler = (e: any) => {
    e.preventDefault();

    sendText(inputRef?.current?.value);
  };

  const clearInput = (e: any) => {
    inputRef.current.value = "";
  };

  const checkLength = (e: any) => {
    e.preventDefault();
    if (inputRef.current.value.length === 7) {
      setColor("green");
      return;
    }
    if (inputRef.current.value.length < 7) {
      setColor("red");
      return;
    }
    setColor("white");
  };

  return (
    <Box
      paddingTop={2}
      pl={1}
      pr={1}
      pb={2}
      display={{ md: "flex" }}
      alignItems="center"
      justifyContent="center"
      padding={6}
    >
      <Stack spacing={4}>
        <InputGroup colorScheme="whatsapp">
          <InputLeftElement
            pointerEvents="none"
            fontSize="1.2em"
            children={<AiOutlineCar color="gray.300" />}
          />
          <Input
            maxLength={7}
            placeholder="Busqua por placa"
            ref={inputRef}
            onChange={checkLength}
            onFocus={() => {
              setColor("white");
            }}
            isInvalid={true}
          />
          <InputRightElement children={<MdCheck color={lengthIsValid} />} />
        </InputGroup>
      </Stack>
      <Stack direction="row" spacing={4} ml={4}>
        <Button
          isLoading={isLoading}
          loadingText="Buscando"
          colorScheme="brand"
          variant="outline"
          onClick={clearInput}
        >
          Limpar Pesquisa
        </Button>
        <Button
          isLoading={isLoading}
          loadingText="Buscando"
          colorScheme="brand"
          variant="outline"
          onClick={submitHandler}
        >
          Pesquisar
        </Button>
      </Stack>
    </Box>
  );
}

export default InputPlaca;
