import React from "react";
import { Box, Heading, Stack, Td, Tr, Text } from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai";

interface Props {
  queryText: string;
}
function TablePlaceholder({ queryText }: Props) {
  return (
    <Tr height="80vh">
      <Td colSpan={14} border={0}>
        <Box
          paddingTop={2}
          // pl={1}
          // pr={1}
          // pb={2}
          display="flex"
          flex={1}
          height="100%"
          alignItems="center"
          justifyContent="center"
          padding={6}
        >
          <Stack spacing={4} ml={4} justifyContent="center" alignItems="center">
            <AiOutlineSearch color="gray.300" size={80} />
            <Heading>Nenhum resultado encontrado.</Heading>
            {queryText && (
              <Text fontWeight="bold" color="gray.500">
                Não foram encontrados resultados para a placa "{queryText}"{" "}
              </Text>
            )}
          </Stack>
        </Box>
      </Td>
    </Tr>
  );
}

export default TablePlaceholder;
